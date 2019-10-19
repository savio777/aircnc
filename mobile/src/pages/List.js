import React, { useEffect, useState } from 'react'

import {
  TouchableOpacity,
  AsyncStorage,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native'

import SpotList from '../components/SpotList'

import logo from '../../assets/logo.png'

function List({ navigation }) {

  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('techs').then((value) => {

      const techsArray = value.split(',').map((tech) => tech.trim())

      setTechs(techsArray)
    })
  }, [])

  function logOut() {
    AsyncStorage.removeItem('user')
    AsyncStorage.removeItem('techs')

    navigation.navigate('Login')
  }

  return (
    <>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <SafeAreaView style={style.container} >
        <TouchableOpacity onPress={logOut}>
          <Image on style={style.logo} source={logo} />
        </TouchableOpacity>
        <ScrollView>
          {(techs) && (
            techs.map((value) => (<SpotList key={value} tech={value} />))
          )}
        </ScrollView>
      </SafeAreaView>

    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 10
  }
})

export default List
