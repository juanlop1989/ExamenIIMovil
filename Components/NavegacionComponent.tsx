import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Acelerometro from '../page/Acelerometro'
import Logs from '../page/Logs'

export default function NavegacionComponent() {

  const tabNavigation = createBottomTabNavigator()
  return (
    
    <NavigationContainer>

        <tabNavigation.Navigator initialRouteName='Acelerometro'>
            <tabNavigation.Screen name='Acelerometro' component={Acelerometro}></tabNavigation.Screen>
            <tabNavigation.Screen name='Logs' component={Logs}></tabNavigation.Screen>
        </tabNavigation.Navigator>
    </NavigationContainer>
  )
}