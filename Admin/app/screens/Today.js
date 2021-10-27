import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Today(){
  const navigation = useNavigation();
  const slots = [
    { time: '07:00AM', people: 4 },
    { time: "11:30AM", people: 9 },
    { time: "04:00PM", people: 12 },
    { time: "07:00PM", people: 0 }
  ]

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Today's Deliveries</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.slots}>
          {slots.map(i => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate("Session")} style={styles.slot}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{i.time}</Text>
                <Text style={{ textAlign: 'center' }}>{i.people}/10 people booked this slot</Text>
              </TouchableOpacity>
            )
          })}
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
  trackbtn:{
    backgroundColor: '#ff3333',
    padding: 10,
    borderRadius: 4
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
})