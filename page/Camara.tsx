import { View, Text, Button ,StyleSheet, useAnimatedValue,Image} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker   from 'expo-image-picker'

export default function Camara() {

  const [imagenSelccionada, setImagenSelecionada] = useState<string | null> (null)

  const tomarFotografia = async () =>{

    const result = await  ImagePicker.launchCameraAsync({
        allowsEditing:true,
        quality:1
    })

    if(!result.canceled){
     
      setImagenSelecionada( result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccionar Camara o galeria</Text>

      <View style={styles.buttonContainer}>
        <Button title='Abrir galeria' ></Button>
        <Button title='Tomar fotografia' onPress={tomarFotografia}></Button>
      </View>

      <View>
        <Text>Imagen selecciona</Text>

        <Image source={{uri: imagenSelccionada}} style={styles.image}/>
        
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
