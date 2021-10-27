import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Modal } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function SetSlots(){
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const days = ['Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays', 'Sundays'];

  const editModal = () => {
    return(
      <Modal animationType={"slide"} transparent={true} visible={show} onRequestClose={() => setShow(false) }>
        <View style = {styles.modalwrap}>
          <View style = {styles.modal}>
            <View>
              <TouchableOpacity onPress={() => setShow(false)} style={{ alignSelf: 'flex-end', backgroundColor: 'white' }}>
                <Image source={require('./../assets/close.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }} />
              </TouchableOpacity>
              <Text style={styles.mhead}>Modays</Text>

              <View>
                <View style={styles.slot}>
                  <Text>07:00AM</Text>
                  <Text>Max: 10 People</Text>
                  <TouchableOpacity><Image source={require('./../assets/close.png')} style={{ width: 15, height: 15, resizeMode: 'cover' }} /></TouchableOpacity>
                </View>
                <View style={styles.slot}>
                  <Text>10:00AM</Text>
                  <Text>Max: 10 People</Text>
                  <TouchableOpacity><Image source={require('./../assets/close.png')} style={{ width: 15, height: 15, resizeMode: 'cover' }} /></TouchableOpacity>
                </View>
                <View style={styles.slot}>
                  <Text>02:00PM</Text>
                  <Text>Max: 5 People</Text>
                  <TouchableOpacity><Image source={require('./../assets/close.png')} style={{ width: 15, height: 15, resizeMode: 'cover' }} /></TouchableOpacity>
                </View>
                <View style={[styles.slot, { marginTop: 25 }]}>
                  <TextInput style={styles.input} placeholder="Time" />
                  <TextInput style={styles.input} placeholder="Max" />
                  <TouchableOpacity style={styles.trackbtn}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
      </Modal>
    )
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      {editModal()}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Set Slots</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        {days.map(i => {
          return(
            <View style={{ marginBottom: 25 }}>
              <View style={styles.dayhead}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i}</Text>
                <TouchableOpacity onPress={() => setShow(true)}><Text style={{ fontSize: 15, color: 'red' }}>Edit</Text></TouchableOpacity>
              </View>
              <View style={styles.slot}>
                <Text>07:00AM</Text>
                <Text>Max: 10 People</Text>
              </View>
              <View style={styles.slot}>
                <Text>10:00AM</Text>
                <Text>Max: 10 People</Text>
              </View>
              <View style={styles.slot}>
                <Text>02:00PM</Text>
                <Text>Max: 5 People</Text>
              </View>
            </View>
          )
        })}
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
  main: {
    width: '100%',
    height: '90%',
    flexDirection: 'column',
    paddingTop: 20,
    paddingHorizontal: '5%',
    paddingBottom: 30
  },
  rower: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15
  },
  paybtn: {
    backgroundColor: '#ff3333',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 40
  },
  input: {
    width: '40%',
    backgroundColor: '#efefef',
    borderRadius: 6,
    paddingLeft: 5,
    fontSize: 14,
    paddingVertical: 3
  },
  dayhead:{
    flexDirection: 'row',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  slot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  modalwrap: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-start',
  },
  modal: {
    marginTop: '20%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 10,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  mhead: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  trackbtn:{
    backgroundColor: '#ff3333',
    padding: 5,
    borderRadius: 4
  },
})