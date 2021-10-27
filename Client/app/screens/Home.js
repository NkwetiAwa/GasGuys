import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Home(){
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const logout = async() => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Guest');
  }

  const userMenu = () => {
    if(show)
    return(
      <View style={styles.menucontainer}>
        <View style={[styles.header, { flexDirection: 'row', elevation: 0, borderBottomWidth: 0.5, borderBottomColor: '#424242' }]}>
          <TouchableOpacity onPress={() => setShow(false)}>
            <Image source={require('./../assets/close.png')} style={styles.close} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Michael</Text>
            <Image source={require('./../assets/user.png')} style={[styles.close, { marginLeft: 5 }]} />
          </View>
        </View>
        <View style={styles.menucontent}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.mbtn}>
              <Image source={require('./../assets/user.png')} style={[styles.micon, { marginRight: 15 }]} />
              <Text style={{ fontSize: 16 }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Appointments")} style={styles.mbtn}>
              <Image source={require('./../assets/calendar.png')} style={[styles.micon, { marginRight: 15 }]} />
              <Text style={{ fontSize: 16 }}>Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mbtn}>
              <Image source={require('./../assets/settings.png')} style={[styles.micon, { marginRight: 15 }]} />
              <Text style={{ fontSize: 16 }}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.mbtn}>
              <Image source={require('./../assets/help.png')} style={[styles.micon, { marginRight: 15 }]} />
              <Text style={{ fontSize: 16 }}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logout()} style={styles.mbtn}>
              <Image source={require('./../assets/signout.png')} style={[styles.micon, { marginRight: 15 }]} />
              <Text style={{ fontSize: 16, color: '#ff3333' }}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Image source={require('./../assets/menu.png')} style={styles.menu} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select an option</Text>
        <View style={styles.rower}>
          <TouchableOpacity onPress={() => navigation.navigate("SelectSlot")}>
            <View style={styles.circle}>
              <Image source={require('./../assets/order.png')} style={styles.img} />
            </View>
            <Text style={styles.opttxt}>Order Gas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CheckPrices")}>
            <View style={styles.circle}>
              <Image source={require('./../assets/check.png')} style={styles.img} />
            </View>
            <Text style={styles.opttxt}>Check gas price</Text>
          </TouchableOpacity>
        </View>
      </View>
      {userMenu()}
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
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff3333',
    backgroundColor: 'rgba(360,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 55,
    height: 55,
    resizeMode: 'stretch'
  },
  opttxt: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15
  },
  menucontainer: {
    width: '70%',
    height: Dimensions.get('screen').height,
    position: 'absolute',
    zIndex: 1000,
    elevation: 40,
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  close: {
    width: 40,
    height: 40
  },
  menucontent: {
    width: '100%',
    height: '80%',
    justifyContent: 'space-between',
    padding: 10
  },
  mbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  micon: {
    width: 30,
    height: 30
  },
})