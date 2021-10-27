import axios from 'axios';
import React, { useState } from 'react';
import { ScrollView, Alert, View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from 'react-navigation-hooks';

export default function SignIn(){
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = () => {
    if(username && password){
      const data = { username: username, password: password }
      axios.post('https://gas-guy.herokuapp.com/rest-auth/login/', data, { withCredentials: false })
      .then(async res => {
        if(res.data.key){
          const user = { key: res.data.key, username: username }
          await AsyncStorage.setItem('userToken', JSON.stringify(user));
          navigation.navigate('Home');
        }else{
          Alert.alert(
            `Oops!`,
            t("Your login credentials are invalid"),
          )
        }
      })
      .catch(err => console.log(err));
    }
  }

  const giveToken = async() => {
    await AsyncStorage.setItem('userToken', JSON.stringify({key: "3434343434", username: 'Infinity'}))
    navigation.navigate('Home');
  }

  return(
    <View style={styles.main}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sign In</Text>
        </View>
        <View style={styles.body}>
          <Input
            placeholder="Username"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Username"
            keyboardType="email-address"
            onChangeText={e => setUsername(e)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <Input
            placeholder="Password"
            inputContainerStyle={styles.input}
            containerStyle={styles.contain}
            label="Password"
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
            labelStyle={{ fontFamily: 'sans-serif-thin', marginBottom: -10, fontSize: 14 }}
          />
          <TouchableOpacity onPress={() => LogIn()} style={styles.createbtn}>
            <Text style={{ color: 'white', fontSize: 15 }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')} style={{ paddingVertical: 20 }}>
            <Text>Don't have an account yet? <Text style={{ fontWeight: 'bold' }}>Create Account</Text>.</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly'
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
})