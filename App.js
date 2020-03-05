import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'
import Home from './screens/Home'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login Page',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#A89C94FF' },
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#A89C94FF' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
