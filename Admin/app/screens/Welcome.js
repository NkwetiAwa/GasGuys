import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar } from 'react-native';

export default function Welcome(){
  return(
    <View style={styles.main}>
      <StatusBar hidden={true} />
      <ImageBackground source={require('./../assets/gas.jpg')} style={styles.img}>
        <View style={styles.overlay}>
          <Image source={require('./../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.footer}>
          <Text style={{ color: 'white' }}>Copyright - GasGuys</Text>
        </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%'
  },
  img: {
    flex: 1
  },
  overlay:{
    flex: 1,
    backgroundColor: 'rgba(360,0,0,0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo: {
    width: 150,
    height: 130,
    resizeMode: 'stretch'
  },
  footer: {
    backgroundColor: 'rgba(360,0,0,0.5)',
    alignItems: 'center',
    paddingBottom: 20,
  }
})