import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function Session(){
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});

  const appointments = [
    { address: "23 Big Mankon", phone: "123456789", name: "Mike Lary", type: "Premium", quantity: "100L", model: "Blazer 2000", mark: "Hyundial"},
    { address: "23 Big Mankon", phone: "123456789", name: "Nkweti Awa", type: "Premium", quantity: "30L", model: "Cruiser", mark: "Chevron"},
    { address: "23 Big Mankon", phone: "123456789", name: "Elon Musk", type: "Standard", quantity: "10L", model: "Roadster", mark: "Tesla"},
    { address: "23 Big Mankon", phone: "123456789", name: "Mike Lary", type: "Premium", quantity: "100L", model: "Blazer 2000", mark: "Hyundial"}
  ]

  const selModal = () => {
    return(
      <Modal animationType={"slide"} transparent={true} visible={show} onRequestClose={() => setShow(false) }>
        <View style = {styles.modalwrap}>
          <View style = {styles.modal}>
            <View>
              <TouchableOpacity onPress={() => setShow(false)} style={{ alignSelf: 'flex-end', backgroundColor: 'white' }}>
                <Image source={require('./../assets/close.png')} style={{ width: 25, height: 25, resizeMode: 'cover' }} />
              </TouchableOpacity>
              <Text style={styles.mhead}>{selected.name}</Text>

              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Address:</Text>
                <Text>{selected.address}</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Phone</Text>
                <Text>{selected.phone}</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Car Mark</Text>
                <Text>{selected.mark}</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Car Model</Text>
                <Text>{selected.model}</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Car Color</Text>
                <Text>Green</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Type:</Text>
                <Text>{selected.type} Gas</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Quantity:</Text>
                <Text>{selected.quantity}</Text>
              </View>
              <View style={styles.mrower}>
                <Text style={styles.mlabel}>Emergency:</Text>
                <Text>false</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const select = (i) => {
    setSelected(i);
    setShow(true);
  }

  return(
    <View>
      <StatusBar backgroundColor="#911" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Today")} style={{ flexDirection: 'row',alignItems: 'center' }}>
          <Image source={require('./../assets/back.png')} style={{ width: 35, height: 35 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>07:00AM Session</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trackbtn}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Start Delivery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {appointments.map(i => {
          return(
            <View style={styles.rower}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{i.name}</Text>
                <Text>{i.quantity}, {i.type} Gas</Text>
              </View>
              <TouchableOpacity onPress={() => select(i)} style={styles.obtn}>
                <Text style={{ color: '#ff3333', }}>View Details</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
      {selModal()}
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
    backgroundColor: 'white',
    justifyContent: 'space-between'
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
    marginBottom: 20,
  },
  trackbtn:{
    backgroundColor: '#ff3333',
    padding: 10,
    borderRadius: 4
  },
  obtn: {
    padding: 10
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
    paddingBottom: 20
  },
  mhead: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mrower:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  mlabel: {
    fontWeight: 'bold'
  }
})