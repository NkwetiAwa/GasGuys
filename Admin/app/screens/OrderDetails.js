import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function OrderDetails(){
  const appointments = [1, 2, 3, 4, 5]

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.alltxt}>User's Address</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>ZIP Code:</Text>
          <Text style={styles.alltxt}>User's ZIP Code</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Mark of car:</Text>
          <Text style={styles.alltxt}>User's car mark</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Car Model:</Text>
          <Text style={styles.alltxt}>User's car model</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Type of Gas:</Text>
          <Text style={styles.alltxt}>Premium</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Gas Quantity:</Text>
          <Text style={styles.alltxt}>30L</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7  }}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.alltxt}>$400</Text>
        </View>
        <TouchableOpacity style={styles.paybtn}>
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