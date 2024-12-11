import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Accelerometer } from 'expo-sensors';

export default function Acelerometro() {

  const [data, setData]= useState({
    x:0,
    y:0,
    z:0
  });

  const [pocisionBalon, setPocisionBalon]= useState({
    x:150,
    y:300,
    z:100
  });


  const updatePosicionBalon = ({x,y,z}: any) =>{

    setPocisionBalon((prev) =>({

        // es como redondendear valores numericos
        x: Math.min(Math.max(prev.x + x *10, 0),300),
        y: Math.min(Math.max(prev.y + y *10, 0),600),
        z: Math.min(Math.max(prev.z + z *10, 0),600),
    }))

  }

  useEffect(()=>{
    //plugin acelerometro

    const suscription = Accelerometer.addListener((acelerometroData) =>{
        //console.log(acelerometroData)

        setData(acelerometroData);
        updatePosicionBalon(acelerometroData)
        
    });

    Accelerometer.setUpdateInterval(15)//Intervalo de actualizacion

    return () => suscription.remove()


  }, [])


  return (
    <View style={style.container}>
      
      <View style={[
            style.balon,
            {
                left: pocisionBalon.x,
                top: pocisionBalon.y,
                right: pocisionBalon.z
            }
        ]
      
      }>

      </View>

      <Text style={style.texto}>Mover el dispositivo para ver efecto</Text>

    </View>
  )
}

const style = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center',
        position:'relative'
    },
    balon:{
        position:'absolute',
        width:50,
        height:50,
        backgroundColor:'blue',
        borderRadius:25
    },
    texto:{
        position:'absolute',
        bottom:50,
        fontSize:16,
        fontWeight:'bold'
    }


})