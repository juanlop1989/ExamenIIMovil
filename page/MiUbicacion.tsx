import { View, Text,StyleSheet, Dimensions, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location    from    'expo-location'
import MapView, { Marker } from 'react-native-maps'

export default function MiUbicacion() {

//latitud, longitud,altitud

const   [location,setLocation]=useState<Location.LocationObject |   null>(null)

useEffect(()=>{
    (async ()=>{
        let {status}    =   await   Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
            Alert.alert('Error','Usuairo    no  otorgo  permisoa')
            return
        }

        let location=await  Location.getCurrentPositionAsync({});
        console.log(location)
        setLocation(location)

    })();
},[])
  return (
   
    <View style={style.container}>
    {location ? (
      <MapView  style={style.map}
      initialRegion={{
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
      }}
      >

        <Marker 
            coordinate={{
                longitude:location.coords.longitude,
                latitude:location.coords.latitude
            }}
            title='Mi   Ubicacion'
            description='Estoy ubicado en este punto'
        >

        </Marker>
        
      </MapView>
    ) : (
      <Text>Cargando Mi Ubicacion...</Text>
    )}
  </View>
)
}

const  style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    map:{
        width:   Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})