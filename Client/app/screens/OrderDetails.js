import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, AsyncStorage, ScrollView } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

export default function OrderDetails(props){
  const navigation = useNavigation();
  const order = props.navigation.state.params.order;
  console.log(order)

  const makeOrder = async() => {
    const user = await AsyncStorage.getItem('userToken');
    const token = JSON.parse(user).key;
    axios.post('https://gas-guy.herokuapp.com/ordering-api/orders/', order, { headers: {"Authorization": `Bearer ${token}`}, withCredentials: false })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('PlaceOrder', { day: order.day, time: order.time_cut })} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.alltxt}>{order.address}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>ZIP Code:</Text>
          <Text style={styles.alltxt}>{order.zip_code}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Mark of car:</Text>
          <Text style={styles.alltxt}>{order.car_brand}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Car Model:</Text>
          <Text style={styles.alltxt}>{order.car_model}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Type of Gas:</Text>
          <Text style={styles.alltxt}>{order.gas_type}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Gas Quantity:</Text>
          <Text style={styles.alltxt}>{order.gas_quantity}L</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.alltxt}>$400</Text>
        </View>
        <TouchableOpacity onPress={() => makeOrder()} style={styles.paybtn}>
          <Text style={{ color: 'white', fontSize: 15 }}>Pay Now</Text>
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
  main: {
    width: '100%',
    height: '90%',
    flexDirection: 'column',
    marginTop: 20,
    paddingHorizontal: '4%'
  },
  alltxt: {
    fontSize: 16,
    color: 'black',
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 10
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
})