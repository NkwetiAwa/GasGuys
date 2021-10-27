import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function CheckPrices(){
  const navigation = useNavigation();
  const [reg, setReg] = useState(null);
  const [prm, setPrm] = useState(null);

  useEffect(async() => {
    const user = await AsyncStorage.getItem('userToken');
    const token = JSON.parse(user).key;
    axios.get('https://gas-guy.herokuapp.com/ordering-api/gases/', { headers: {"Authorization": `Bearer ${token}`} })
    .then(res => {
      if(res.data.count){
        const l = res.data.count -1;
        if(res.data.results[l].gas_type == 0){
          setReg(res.data.results[l].gas_price);
          setPrm(res.data.results[l - 1].gas_price);
        }else{
          setReg(res.data.results[l - 1].gas_price);
          setPrm(res.data.results[l].gas_price);
        }
      }
    })
  })

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Pricing</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.rower}>
          <Text style={styles.label}>Premium Gas</Text>
          <Text style={styles.cash}>${prm}/L</Text>
        </View>
        <View style={styles.rower}>
          <Text style={styles.label}>Standard Gas</Text>
          <Text style={styles.cash}>${reg}/L</Text>
        </View>
      </View>
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
    marginTop: 20
  },
  rower: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cash: {
    fontWeight: 'bold'
  }
})