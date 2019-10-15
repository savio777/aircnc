import React from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native'

function Login({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Text>Login</Text>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    
  }
})

export default Login
