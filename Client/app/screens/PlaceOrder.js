import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Alert, Image, ScrollView, Modal, Picker } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

import ColorPicker from 'react-native-wheel-color-picker'

export default function PlaceOrder(props){
  const navigation = useNavigation();
  const day = props.navigation.state.params.day;
  const time = props.navigation.state.params.time;
  const [color, setColor] = useState('#ffffff');
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(30);
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState(null);
  const [mark, setMark] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('a084d0c6-1226-46d7-94ba-8cae401a1bef');
  const [ziperr, setZiperr] = useState(true);

  const zips = [ 46077, 46107, 46113, 46163, 46183, 46201, 46202, 46203, 46204, 46205, 46206, 46207, 46208, 46209, 46210, 46211, 46213, 46214, 46217, 46218, 46219, 46220, 46221, 26222, 46224, 46225, 46226, 46227, 46228, 46229, 46230, 46231, 46234, 46235, 46237, 46239, 46240, 46241, 46242, 46244, 46250, 46251, 46253, 46254, 46255, 46256, 46259, 46260, 46262, 46266, 46268, 46274, 46275, 46277, 46278, 46282, 46283, 46285, 46291, 46295, 46296, 46298 ]

  const checkZip = () => {
    if(!zips.includes(parseInt(zip))){
      setZiperr(true);
      Alert.alert(
        `Invalid ZIP Code!`,
        "Delivery is limited to Indianapolis for the moment.",
      )
    }else{
      setZiperr(false);
    }
  }

  const putDate = () => {
    if(day === 'Monday'){
      return 1
    }else if(day === 'Tuesday'){
      return 2
    }else if(day === 'Wednesday'){
      return 3
    }else if(day === 'Thursday'){
      return 4
    }else if(day === 'Friday'){
      return 5
    }else if(day === 'Saturday'){
      return 6
    }else if(day === 'Sunday'){
      return 0
    }
  }

  function dates() {
    var dayOfWeek = putDate();
    var date = new Date(Date.now());
    date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
    const j = new Date(date);
    return(j.getDate()+"/"+j.getMonth()+"/"+j.getFullYear());
  }

  const nextPage = () => {
    if(address.length > 0 && zip && !ziperr && type && quantity){
      const order = { address: address, day: day, order_type: 0, zip_code: zip, car_brand: mark, car_model: model, gas_quantity: quantity, gas_type: type, delevery_time: time, delevery_date: dates() }
      navigation.navigate('OrderDetails', { order: order })
    }else{
      Alert.alert(
        `Error Processing`,
        "Please fill all fields.",
      );
      checkZip();
    }
  }

  const colorModal = () => {
    return(
      <Modal animationType={"slide"} transparent={true} visible={show} onRequestClose={() => setShow(false) }>
        <View style = {styles.modalwrap}>
          <View style = {styles.modal}>
            <ColorPicker
              color={color}
              onColorChange={e => setColor(e)}
              thumbSize={40}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25, }}>
              <TouchableOpacity onPress={() => setShow(false)} style={{ paddingHorizontal: 15, paddingVertical: 7, backgroundColor: 'white', marginRight: 15 }}>
                <Text style={{ color: '#ff3333', fontSize: 16 }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShow(false)} style={{ paddingHorizontal: 15, paddingVertical: 7, backgroundColor: '#f33', borderRadius: 4 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const styleputer = (i) => {
    if(i == quantity){
      return styles.seldbtn;
    }else{
      return styles.selbtn;
    }
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SelectSlot')} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Input
            placeholder="Address"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Address"
            onChangeText={e => setAddress(e)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <Input
            placeholder="ZIP Code"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="ZIP Code"
            onChangeText={e => setZip(e)}
            onBlur={() => checkZip()}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <Input
            placeholder="Mark of car"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Mark of car"
            onChangeText={e => setMark(e)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <Input
            placeholder="Car Color"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Car color"
            value={color}
            onFocus={() => setShow(true)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <Input
            placeholder="Car model"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Car model"
            onChangeText={e => setModel(e)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <View style={styles.contain}>
            <Text style={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14, paddingLeft: 10 }}>Gas Type</Text>
            <Picker value={type} onValueChange={e => setType(e)} style={{ width: '100%' }}>
              <Picker.Item label="Premium Gas" value="a084d0c6-1226-46d7-94ba-8cae401a1bef" /> 
              <Picker.Item label="Standard Gas" value="73de6fc8-396f-4bca-811b-e8a16e0f8e77" />
            </Picker>
          </View>
          <Text style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>Gas Quantity</Text>
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
            <TouchableOpacity onPress={() => setQuantity(5)} style={styleputer(5)}><Text>5L</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setQuantity(10)} style={styleputer(10)}><Text>10L</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setQuantity(30)} style={styleputer(30)}><Text>30L</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setQuantity(60)} style={styleputer(60)}><Text>60L</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setQuantity(100)} style={styleputer(100)}><Text>100L</Text></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => nextPage()} style={styles.createbtn}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {colorModal()}
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
  body: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingBottom: 100
  },
  input: {
    borderBottomWidth: 0,
    marginBottom: -25
  },
  contain: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    width: '90%',
    borderRadius: 10,
    paddingTop: 5,
    marginBottom: 10
  },
  createbtn: {
    backgroundColor: '#ff3333',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
    alignSelf: 'center'
  },
  modalwrap: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-start',
  },
  modal: {
    marginTop: '20%',
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 10,
    justifyContent: 'space-between',
    paddingBottom: 20,
    height: 500
  },
  selbtn:{
    width: 50,
    height: 50,
    borderColor: '#f33',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  seldbtn:{
    width: 50,
    height: 50,
    borderColor: '#f33',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(360,0,0,0.1)'
  }
})