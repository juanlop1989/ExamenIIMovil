import React from 'react'
import { View, Text, Alert, FlatList, StyleSheet, TextInput, Button } from 'react-native'
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import api from '../Service/Api';
import { Logs } from '../Modelos/Logs';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export default function LogsComponent() {
    const [idlog, setIdlog] = useState<number>(0);
    const [postitionX, setPostitionX] = useState<Float>(0);
    const [positionY, setPositionY] = useState<Float>(0);
    const [fecha, setFecha] = useState<Date>();

    const [registros, setRegistros] = useState([]);

    const gettLogs = async () => {
        try {
    
          const response = await api.get('logs');
          setRegistros(response.data)
    
        } catch (error) {
          Alert.alert('Error', 'Ocurrio un error' + error)
        }
      }
    
      useFocusEffect(
        useCallback(() => {
          gettLogs();
        }, [])
      );


  return (
    <View style={styles.container}>
        <Text>Lista de Logs</Text>
      
    <FlatList 
      data={registros}
      keyExtractor={(item:Logs) => item.IdLog.toString()}
      renderItem={({item})=>(

        <View style={styles.card}>
            <Text>Log ID: {item.IdLog}</Text>
            <Text>Posición X: {item.postitionX}</Text>
            <Text>Posición Y: {item.positionY} </Text>
            <Text>Fecha: {item.fecha.toString()} </Text>
        </View>
       
      )}

      >


    </FlatList>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f4f4f4',
      marginTop:10
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop:5
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
    },
  });