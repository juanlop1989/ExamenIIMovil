import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Acelerometro from '../page/Acelerometro'
import Camara from '../page/Camara'
import Mapa from '../page/Mapa'
import MiUbicacion from '../page/MiUbicacion'

export default function NavegacionComponent() {

  const tabNavigation = createBottomTabNavigator()
  return (
    
    <NavigationContainer>

        <tabNavigation.Navigator initialRouteName='Acelerometro'>
            <tabNavigation.Screen name='Acelerometro' component={Acelerometro}></tabNavigation.Screen>
            <tabNavigation.Screen name='Camara' component={Camara}></tabNavigation.Screen>
            <tabNavigation.Screen name='Mapa' component={Mapa}></tabNavigation.Screen>
            <tabNavigation.Screen name='MiUbicacion' component={MiUbicacion}></tabNavigation.Screen>
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}