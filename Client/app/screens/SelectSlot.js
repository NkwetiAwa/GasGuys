import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, Alert, StyleSheet, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import { useNavigation } from 'react-navigation-hooks';

export default function SelectSlot(){
  const navigation = useNavigation();
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState({})

  useEffect(async() => {
    const user = await AsyncStorage.getItem('userToken');
    const token = JSON.parse(user).key;
    axios.get('https://gas-guy.herokuapp.com/ordering-api/timeslots/', { headers: {"Authorization": `Bearer ${token}`} })
    .then(res => {
      if(res.data.results){
        setSlots(res.data.results);
      }
    })
    .catch(err => {
      Alert.alert(
        `Oops!`,
        "Please check your network connection and try again.",
      )
    })
  }, []);


  const onSelect = (i) => {
    setSelected(i);
  }

  const checkselected = (i) => {
    if(JSON.stringify(i) === JSON.stringify(selected)){
      return(
        <View style={{ marginRight: 5, marginTop: 5, alignSelf: 'flex-end', width: 30, height: 30 }}>
          <Image source={require('./../assets/tick.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }} />
        </View>
      )
    }
  }

  const nextPage = () => {
    if(selected.id){
      navigation.navigate('PlaceOrder', { time: selected.time_cut, day: selected.day_cut });
    }else{
      Alert.alert(
        `Invalid Slot!`,
        "Please select a time slot to continue."
      )
    }
  }
  
  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Time Slot</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.selector}>
          <TouchableOpacity>
            <Image source={require('./../assets/left.png')} style={styles.ctrbtn} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>July 14</Text>
          <TouchableOpacity>
            <Image source={require('./../assets/right.png')} style={styles.ctrbtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.slots}>
          {slots.map(i => {
            if(!i.full){
              return(
                <TouchableOpacity onPress={() => onSelect(i)} style={styles.slot}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i.day_cut+" at "+i.time_cut}</Text>
                  <Text style={{ textAlign: 'center' }}>0/{i.max_people} people booked this slot</Text>
                  {checkselected(i)}
                </TouchableOpacity>
              )
            }else{
              return(
                <TouchableOpacity onPress={() => onSelect(i)} style={styles.fslot}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i.day_cut+" at "+i.time_cut}</Text>
                  <Text style={{ textAlign: 'center' }}>slot full, emergency only</Text>
                  {checkselected(i)}
                </TouchableOpacity>
              )
            }
          })}
        </View>
        <TouchableOpacity onPress={() => nextPage()} style={styles.createbtn}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 10,
    zIndex: 100,
    backgroundColor: 'white'
  },
  menu: {
    width: 40,
    height: 40
  },
  selector: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ctrbtn: {
    width: 60,
    height: 60
  },
  slots: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 25,
    paddingBottom: 30
  },
  slot:{
    borderRadius: 7,
    width: '48%',
    marginLeft: '1%',
    marginRight: '1%',
    height: 100,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
  },
  fslot: {
    borderRadius: 7,
    width: '48%',
    marginLeft: '1%',
    marginRight: '1%',
    height: 100,
    backgroundColor: 'rgba(360,0,0,0.2)',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createbtn: {
    backgroundColor: '#ff3333',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center'
  },
})