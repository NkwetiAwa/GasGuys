import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Guest(){
  const navigation = useNavigation();

  return(
    <View style={styles.main}>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.overlay}>
          <Image source={require('./../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Start By Creating an Account</Text>
          <Text style={{ textAlign: 'center' }}>Create an account with us to start benefiting from our amazing service</Text>
        </View>
        <View style={styles.btnsect}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')} style={styles.createbtn}>
            <Text style={{ color: 'white', fontSize: 15 }}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signbtn}>
            <Text style={{ color: '#911', fontSize: 15 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    width: '100%',
    height: '100%',
  },
  overlay:{
    paddingTop: Dimensions.get("screen").height/6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo: {
    width: 120,
    height: 100,
    resizeMode: 'stretch'
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 30,
  },
  btnsect: {
    paddingTop: 40,
    alignItems: 'center'
  },
  createbtn: {
    backgroundColor: '#ff3333',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15
  },
  signbtn: {
    backgroundColor: 'rgba(360,0,0,0.2)',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center'
  }
})