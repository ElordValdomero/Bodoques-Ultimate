import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MonitoreoEnTiempoReal from './features/application/components/Monitoreo_en_tiempo_real';
import DiasDeLaSemana from './features/application/components/Dias de la semana';
import RegistroUsuarios from './features/application/components/registroUsuarios';
import InicioSesion from './features/application/components/inicio';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Smart Cistern"
          component={InicioSesion}
          options={{
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              textAlign: 'center',
              width: '100%',
            },
          }}
        />
        <Stack.Screen
          name="Monitoreo en tiempo real"
          component={MonitoreoEnTiempoReal}
        />
        <Stack.Screen
          name="Días de la semana"
          component={DiasDeLaSemana}
        />
        <Stack.Screen
          name="Registrarse"
          component={RegistroUsuarios}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

