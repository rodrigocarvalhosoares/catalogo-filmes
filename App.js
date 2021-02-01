import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';

const StackNav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Tela1} name="Tela1" options={{ title: "Catálogo de Filmes"}} />
        <StackNav.Screen component={Tela2} name="Tela2" options={{ title: "Filme"}} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
