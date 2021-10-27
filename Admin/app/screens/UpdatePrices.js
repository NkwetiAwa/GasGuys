import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';

export default function UpdatePrices(){
  const navigation = useNavigation();

  const putPrices = () => {
    const data = {
    "id": "9b55b6a9-d49d-40bc-8f51-47f2f95f0f76",
    "gas_type": 0,
    "gas_price": "170.00",
    "delevery_price": "170.00",
    "emergency_price": "185.00",
    }
    const token = '196b8ec0fbc7f82304dd20749960e427d38fc89e';
    axios.get('https://gas-guy.herokuapp.com/ordering-api/gases/9b55b6a9-d49d-40bc-8f51-47f2f95f0f76/', data, { headers: {"Authorization": `Bearer ${token}`} })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Update Prices</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Premium price per gallon</Text>
          <TextInput
            placeholder="price per gallon"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Standard price per gallon</Text>
          <TextInput
            placeholder="price per gallon"
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={() => putPrices()} style={styles.paybtn}>
          <Text style={{ color: 'white', fontSize: 15 }}>Update</Text>
        </TouchableOpacity>
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
    marginTop: 20,
    paddingHorizontal: '5%'
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
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 16
  }
})