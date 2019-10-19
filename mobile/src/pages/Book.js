import React, { useState } from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'

import api from '../services/api'

function Book({ navigation }) {

  const spot = navigation.getParam('spot')
  const [date, setDate] = useState('')

  async function handleSubmit() {
    const user = await AsyncStorage.getItem('user')

    api.post(`/spots/${spot}/bookings`, { date }, { headers: { user_id: user } })

    Alert.alert('Solicitação enviada!')

    navigation.navigate('List')
  }

  function handleCancel() {
    navigation.navigate('List')
  }

  return (
    <>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>DATA DE SEU INTERESSE</Text>
        <TextInput
          style={styles.input}
          placeholder='Qual data você deseja reservar?'
          placeholderTextColor='#999'
          value={date}
          onChangeText={setDate}
          keyboardType='email-address'
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.textButton}>Solicitar Reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => handleCancel()}
        >
          <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30
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
  cancelButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Book
