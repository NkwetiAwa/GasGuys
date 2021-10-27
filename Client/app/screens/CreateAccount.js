import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, AsyncStorage, TouchableOpacity, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';

export default function CreateAccount(){
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameErr, setnameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');

  const uploadInfo = () => {
    const data = { username: username, phone: phone, is_client: true, email: email, password1: password, password2: password }
    axios.post('https://gas-guy.herokuapp.com/rest-auth/registration/', data, { withCredentials: false })
    .then(async res => {
      console.log(res.data)
      if(res.data.key){
        const user = { key: res.data.key, username: username, phone: phone }
        await AsyncStorage.setItem('userToken', JSON.stringify(user));
        navigation.navigate('Home')
      }else if(res.data.username){
        setnameErr(res.data.username[0]);
      }
      if(res.data.email){
        setEmailErr(res.data.email[0]);
      }
      if(res.data.password1){
        setPassErr(res.data.password1[0]);
      }
    })
    .catch(err => alert(err));
  }

  const putErr = numb => {
    if(numb == 1){
      if(nameErr){
        return <Text style={styles.errtxt}>{nameErr}</Text>
      }
    }else if(numb == 2){
        if(emailErr){
        return <Text style={styles.errtxt}>{emailErr}</Text>
      }
    }else{
      if(passErr){
        return <Text style={styles.errtxt}>{passErr}</Text>
      }
    }
  }

  return(
    <View style={styles.main}>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create an account</Text>
        </View>
        <View style={styles.body}>
        <Input
          placeholder="Enter your username"
          inputContainerStyle={styles.input}
          containerStyle={styles.contain}
          label="Username"
          onChangeText={e => setUsername(e)}
          labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
        />
        {putErr(1)}
        <Input
          placeholder="Enter your phone number"
          inputContainerStyle={styles.input}
          containerStyle={styles.contain}
          label="Tel"
          keyboardType="phone-pad"
          onChangeText={e => setPhone(e)}
          labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
        />
        <Input
          placeholder="Email Address"
          inputContainerStyle={styles.input}
          containerStyle={styles.contain}
          label="Email"
          keyboardType="email-address"
          onChangeText={e => setEmail(e)}
          labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
        />
        {putErr(2)}
        <Input
          placeholder="Password"
          inputContainerStyle={styles.input}
          containerStyle={styles.contain}
          label="Password"
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
          labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
        />
        {putErr(3)}
        <TouchableOpacity onPress={() => uploadInfo()} style={styles.createbtn}>
          <Text style={{ color: 'white', fontSize: 15 }}>Create an Account</Text>
        </TouchableOpacity>
        <Text>By signing up you agree to our <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Privacy Policy and Terms</Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ paddingVertical: 20 }}>
          <Text>Already have an account? <Text style={{ fontWeight: 'bold' }}>Sign In</Text></Text>
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
  header: {
    paddingVertical: 20,
    alignItems: 'center'
  },
  body: {
    paddingVertical: 30,
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 0,
    marginBottom: -20
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
    marginBottom: 15
  },
  errtxt: {
    alignSelf: 'flex-start',
    paddingLeft: '6%',
    marginTop: -10,
    paddingTop: 0,
    marginBottom: 10,
    color: 'red'
  },
})