import 'react-native-gesture-handler';
import React from 'react';
import {TelaPrincipal} from './src/TelaPrincipal'; 
import {TelaProfissional} from './src/TelaProfissional';
import {TelaHistoria} from './src/TelaHistoria';
import {TelaExploracao} from './src/TelaExploracao';
import {TelaCuriosidades} from './src/TelaCuriosidades';
import {TelaArte} from './src/TelaArte';
import {NavigationContainer} from '@react-navigation/native'

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <TelaPrincipal/>
      </NavigationContainer>
    </>
  );
};

export default App;
