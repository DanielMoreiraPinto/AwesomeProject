import 'react-native-gesture-handler';
import React from 'react';
import TelaPrincipal from './src/telas_estrutura/TelaPrincipal'; 
import {TelaExploracao} from './src/telas_estrutura/TelaExploracao';

import {TelaArte} from './src/telas_informacao/telas_arte/TelaArte';
import {TelaArteJogo} from './src/telas_informacao/telas_arte/TelaArteJogo';
import {TelaArteRcmds} from './src/telas_informacao/telas_arte/TelaArteRcmds';

import {TelaHistoria} from './src/telas_informacao/telas_historia/TelaHistoria';
import {TelaHistoriaJogo} from './src/telas_informacao/telas_historia/TelaHistoriaJogo';
import {TelaHistoriaRcmds} from './src/telas_informacao/telas_historia/TelaHistoriaRcmds';

import {TelaProfissional} from './src/telas_informacao/telas_profissional/TelaProfissional';
import {TelaProfissionalJogo} from './src/telas_informacao/telas_profissional/TelaProfissionalJogo';
import {TelaProfissionalRcmds} from './src/telas_informacao/telas_profissional/TelaProfissionalRcmds';

import {TelaCuriosidades} from './src/telas_informacao/telas_curiosidades/TelaCuriosidades';
import {TelaCuriosidadesJogo} from './src/telas_informacao/telas_curiosidades/TelaCuriosidadesJogo';
import {TelaCuriosidadesRcmds} from './src/telas_informacao/telas_curiosidades/TelaCuriosidadesRcmds';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const TabArte = createBottomTabNavigator();
const TabHistoria = createBottomTabNavigator();
const TabProfissional = createBottomTabNavigator();
const TabCuriosidades = createBottomTabNavigator();

function TelaTabArte() {
  return (
    <TabArte.Navigator>
      <TabArte.Screen 
        name="Info"
        component={TelaArte}
      />
      <TabArte.Screen
        name="Fixar"
        component={TelaArteJogo}
      />
      <TabArte.Screen
        name="Mais"
        component={TelaArteRcmds}
      />
    </TabArte.Navigator>
  );
}

function TelaTabHistoria() {
  return (
    <TabHistoria.Navigator>
      <TabHistoria.Screen 
        name="Info"
        component={TelaHistoria}
      />
      <TabHistoria.Screen
        name="Fixar"
        component={TelaHistoriaJogo}
      />
      <TabHistoria.Screen
        name="Mais"
        component={TelaHistoriaRcmds}
      />
    </TabHistoria.Navigator>
  );
}

function TelaTabProfissional() {
  return (
    <TabProfissional.Navigator>
      <TabProfissional.Screen 
        name="Info"
        component={TelaProfissional}
      />
      <TabProfissional.Screen
        name="Fixar"
        component={TelaProfissionalJogo}
      />
      <TabProfissional.Screen
        name="Mais"
        component={TelaProfissionalRcmds}
      />
    </TabProfissional.Navigator>
  );
}

function TelaTabCuriosidades() {
  return (
    <TabCuriosidades.Navigator>
      <TabCuriosidades.Screen 
        name="Info"
        component={TelaCuriosidades}
      />
      <TabCuriosidades.Screen
        name="Fixar"
        component={TelaCuriosidadesJogo}
      />
      <TabCuriosidades.Screen
        name="Mais"
        component={TelaCuriosidadesRcmds}
      />
    </TabCuriosidades.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen 
            name="Inicio"
            component={TelaPrincipal}
            options={{title: "Início"}} 
          />
          <Stack.Screen
            name="Exploracao"
            component={TelaExploracao}
            options={{title: "Exploração"}}
          />

          <Stack.Screen
            name="Arte"
            component={TelaTabArte}
            options={{title: "A Arte"}}
          />

          <Stack.Screen
            name="Historia"
            component={TelaTabHistoria}
            options={{title: "A História"}}
          />

          <Stack.Screen
            name="Profissional"
            component={TelaTabProfissional}
            options={{title: "O Profissional"}}
          />

          <Stack.Screen
            name="Curiosidades"
            component={TelaTabCuriosidades}
            options={{title: "Curiosidades"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
