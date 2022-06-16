import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main"
import Alarms from "./components/Alarms"
import CreateAlarm from './components/CreateAlarm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main App',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="Alarms"
          component={Alarms}
          options={{
            title: 'Alarms',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="CreateAlarm"
          component={CreateAlarm}
          options={{
            title: 'Create Alarm',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;