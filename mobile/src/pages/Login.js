import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  AsyncStorage
} from 'react-native'

import api from '../services/api'

import logo from '../../assets/logo.png'

function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        navigation.navigate('List')
      }
    })
  }, [])

  async function handleSubmit() {
    const response = await api.post('/sessions', {
      email: email
    })

    const { _id } = response.data

    await AsyncStorage.setItem('user', _id)
    await AsyncStorage.setItem('techs', techs)

    navigation.navigate('List')
  }


  return (
    <>
      <View style={style.container}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <Image source={logo} />
        <View style={style.form}>
          <Text style={style.label}>EMAIL*</Text>
          <TextInput
            style={style.input}
            placeholder='Seu Email'
            placeholderTextColor='#999'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={style.label}>TECNOLOGIAS*</Text>
          <TextInput
            style={style.input}
            placeholder='Tecnologias de interesse'
            placeholderTextColor='#999'
            value={techs}
            onChangeText={setTechs}
            autoCapitalize='words'
          />
          <TouchableOpacity
            style={style.button}
            onPress={() => handleSubmit()}
          >
            <Text style={style.textButton}>Encontrar Spots</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Login
