import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Accelerometer } from 'expo-sensors';
import api from '../Service/Api';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export default function Acelerometro() {

  const [data, setData]= useState({
    x: 0,
    y: 0,
  });

  const [pocisionBalon, setPocisionBalon] = useState({
    x: 150,
    y: 300,
  });

  const [colorBalon, setColorBalon] = useState('blue');

  const colores = [ 'green', 'orange', 'pink', 'yellow', 'red', 'purple', 'blue'];

 
  const guardarLog = async (x: Float, y: Float) => {
    const fecha = new Date().toDateString();
    try {
       await api.post(`/logs`, {
        postitionX: x,
        positionY: y,
        fecha: fecha
      });
      //console.log('guardado');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };

  const updatePosicionBalon = ({x, y}: any) => {
    setPocisionBalon((prev) => {
      const nuevaPosicion = {
        x: Math.min(Math.max(prev.x + x * 10, 0), 300),
        y: Math.min(Math.max(prev.y + y * 10, 0), 600),
      };
      setColorBalon(colores[Math.floor(Math.random() * colores.length)]);
      return nuevaPosicion;
    });
  };

  useEffect(() => {
    const suscription = Accelerometer.addListener((acelerometroData) => {
      setData(acelerometroData);
      updatePosicionBalon(acelerometroData);
    });

    Accelerometer.setUpdateInterval(60); 

    const guardar = setInterval(() => {
      guardarLog(pocisionBalon.x, pocisionBalon.y);
    }, 30000); 

    return () => suscription.remove();
  }, []);

  return (
    <View style={style.container}>
      <View 
        style={[style.balon, { left: pocisionBalon.x, top: pocisionBalon.y, backgroundColor: colorBalon }]} 
      />
      <Text style={style.texto}>Mover el dispositivo para ver efecto</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  balon: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25
  },
  texto: {
    position: 'absolute',
    bottom: 50,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
