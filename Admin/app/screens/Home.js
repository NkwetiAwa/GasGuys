import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Home(){
  const navigation = useNavigation();

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
      </View>
      <View style={styles.main}>
        <View style={[styles.rower, { alignItems: 'flex-end' }]}>
          <TouchableOpacity onPress={() => navigation.navigate("Today")} style={styles.bigbtn}>
            <Image source={require('./../assets/clock.png')} style={styles.btnicon}/>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Upcoming Deliveries</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SetSlots")} style={styles.smbtn}>
            <Image source={require('./../assets/cal.png')} style={styles.sbtnicon}/>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Set Slots</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.rower, { alignItems: 'flex-start' }]}>
          <TouchableOpacity onPress={() => navigation.navigate("UpdatePrices")} style={styles.bigbtn}>
            <Image source={require('./../assets/cash.png')} style={styles.btnicon}/>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Update Prices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smbtn}>
            <Image source={require('./../assets/rep.png')} style={styles.sbtnicon}/>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Sales Reports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 10,
    zIndex: 100,
    height: 40,
    backgroundColor: 'white'
  },
  menu: {
    width: 30,
    height: 30
  },
  main: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 1
  },
  rower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  bigbtn: {
    width: '40%',
    paddingVertical: 10,
    backgroundColor: '#ff3333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 15
  },
  btnicon: {
    width: 50,
    height: 50
  },
  smbtn: {
    width: '35%',
    paddingVertical: 7,
    backgroundColor: '#ff3333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  sbtnicon: {
    width: 35,
    height: 35
  }
})