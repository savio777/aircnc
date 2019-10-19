import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  AsyncStorage,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native'

import SpotList from '../components/SpotList'

import logo from '../../assets/logo.png'

function List() {

  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('techs').then((value) => {

      const techsArray = value.split(',').map((tech) => tech.trim())

      setTechs(techsArray)
    })
  }, [])

  return (
    <>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <SafeAreaView style={style.container} >
        <Image style={style.logo} source={logo} />
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
