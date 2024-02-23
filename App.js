//rnfes

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterSamples from './src/samples/CounterSamples'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/screens/login/Login'
import Home from './src/screens/home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Cart from './src/screens/cart/Cart'



const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Login' component={Login} options={{title: 'Merhaba'}}/>
      <Stack.Screen name='Cart' component={Cart}/>
     </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})