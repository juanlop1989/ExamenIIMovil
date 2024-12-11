import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

export default function Mapa() {
  return (
    <View style={style.container}>
      
      <MapView  style={style.map}></MapView>
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,

  },
  map:{
    width:'100%',
    height:'100%'
  }
})