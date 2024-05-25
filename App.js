// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login.js'; //Pantalla de Login
import SignUp from './app/SignUp.js'; //Pantalla de SignUp
import Menu from './app/Menu.js'; //Pantalla de Menu
import AsignarColab from './app/AsignarColab.js'; //Pantalla de AsignarColab
import ModificarColab from './app/ModificarColab.js'; //Pantalla de ModificarColab
import CrearProyecto from './app/CrearProyecto.js'; //Pantalla de CrearProyecto
import ModProyecto from './app/ModificarProyecto.js'; //Pantalla de ModProyecto
import CrearForo from './app/CrearForo.js'; //Pantalla de CrearForo
import ConsultarProyecto from './app/ConsultarProyecto.js'; //Pantalla de ConsultarProyecto
import TableroSeguimiento from './app/TableroSeguimiento.js'; //Pantalla de TableroSeguimiento
import InformeGeneral from './app/InformeGeneral.js'; //Pantalla de InformeGeneral
import InformeTiempo from './app/InformeTiempo.js'; //Pantalla de InformeTiempo
import InformeGastos from './app/InformeGastos.js'; //Pantalla de InformeGastos

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AsignarColab" component={AsignarColab}/>
        <Stack.Screen name="ModificarColab" component={ModificarColab}/>
        <Stack.Screen name="CrearProyecto" component={CrearProyecto}/>
        <Stack.Screen name="ModProyecto" component={ModProyecto}/>
        <Stack.Screen name="CrearForo" component={CrearForo}/>
        <Stack.Screen name="ConsultarProyecto" component={ConsultarProyecto}/>
        <Stack.Screen name="TableroSeguimiento" component={TableroSeguimiento}/>
        <Stack.Screen name="InformeGeneral" component={InformeGeneral}/>
        <Stack.Screen name="InformeTiempo" component={InformeTiempo}/>
        <Stack.Screen name="InformeGastos" component={InformeGastos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}