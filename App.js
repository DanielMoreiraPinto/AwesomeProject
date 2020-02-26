import 'react-native-gesture-handler';
import React from 'react';
import {TelaPrincipal} from './src/telas_estrutura/TelaPrincipal'; 
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

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal">
          <Stack.Screen 
            name="Principal"
            component={TelaPrincipal} 
          />
          <Stack.Screen
            name="Exploracao"
            component={TelaExploracao}
          />

          <Stack.Screen
            name="Arte"
            component={TelaArte}
          />
          <Stack.Screen
            name="ArteJogo"
            component={TelaArteJogo}
          />
          <Stack.Screen
            name="ArteRcmds"
            component={TelaArteRcmds}
          />

          <Stack.Screen
            name="Historia"
            component={TelaHistoria}
          />
          <Stack.Screen
            name="HistoriaJogo"
            component={TelaHistoriaJogo}
          />
          <Stack.Screen
            name="HistoriaRcmds"
            component={TelaHistoriaRcmds}
          />

          <Stack.Screen
            name="Profissional"
            component={TelaProfissional}
          />
          <Stack.Screen
            name="ProfissionalJogo"
            component={TelaProfissionalJogo}
          />
          <Stack.Screen
            name="ProfissionalRcmds"
            component={TelaProfissionalRcmds}
          />

          <Stack.Screen
            name="Curiosidades"
            component={TelaCuriosidades}
          />
          <Stack.Screen
            name="CuriosidadesJogo"
            component={TelaCuriosidadesJogo}
          />
          <Stack.Screen
            name="CuriosidadesRcmds"
            component={TelaCuriosidadesRcmds}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
