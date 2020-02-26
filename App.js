import 'react-native-gesture-handler';
import React from 'react';
import {TelaPrincipal} from './src/TelaPrincipal'; 
import {TelaProfissional} from './src/TelaProfissional';
import {TelaHistoria} from './src/TelaHistoria';
import {TelaExploracao} from './src/TelaExploracao';
import {TelaCuriosidades} from './src/TelaCuriosidades';
import {TelaArte} from './src/TelaArte';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={TelaPrincipal} 
            options={{title: "Principal"}}
          />
          <Stack.Screen
            name="Exploracao"
            component={TelaExploracao}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
