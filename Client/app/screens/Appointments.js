import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Appointments(){
  const navigation = useNavigation();
  const appointments = [1, 2, 3, 4, 5]

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Appointments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {appointments.map(i => {
          return(
            <View style={styles.rower}>
              <Text style={{ fontSize: 16 }}>Appointment_Name_{i}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("TrackAppointment", { id: i })} style={styles.trackbtn}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Track Delivery</Text>
              </TouchableOpacity>
            </View>
          )
        })}
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
  }
})