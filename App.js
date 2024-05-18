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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModProyecto">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AsignarColab" component={AsignarColab}/>
        <Stack.Screen name="ModificarColab" component={ModificarColab}/>
        <Stack.Screen name="CrearProyecto" component={CrearProyecto}/>
        <Stack.Screen name="ModProyecto" component={ModProyecto}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}