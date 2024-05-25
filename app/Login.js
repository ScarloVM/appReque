import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var idUsuarioSistema;
  
  const IniciarSesion = () => {

    var datos = {
        correoElectronico:email,
        contrasena:password
    };

    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/login', { //Cambiar por la URL de la API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data['@respuesta'] === 1) {
            var idUsuarioSistema = data['@idUsuarioR'];
            navigation.navigate('Menu', { idUsuarioSistema: idUsuarioSistema });
            Alert.alert("Inicio de sesión válido")
  
        } else {
            Alert.alert("Su Email o Password son incorrectos")
        }        
    })
    .catch(error => {
        console.error('Error:', error);
    });
  };

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.namePage}>Snupie</Text>
      <View style={styles.squareLogin}>
        <Text style={styles.titleLogin}>Login</Text>
        <View style={styles.dataLogin}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={IniciarSesion}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#749691',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  squareLogin: {
    backgroundColor: '#1E3731',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 340
  },
  titleLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  dataLogin: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000000',
  },
  buttonLogin: {
    backgroundColor: '#3E9994',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonSignUp: {
    backgroundColor: '#3E9994',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});