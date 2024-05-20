import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp () {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');

  const registrarUsuario = () => {
    var datos = {
      nombre:nombre,
      cedula:cedula,
      correoElectronico:email,
      departamento:departamento,
      numeroTelefono:telefono,
      contrasena:password
    };

    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);// Aquí puedes hacer algo con la respuesta del servidor si es necesario
        var idUsuarioSistema = data['@respuesta'];
        navigation.navigate('Menu', { idUsuarioSistema: idUsuarioSistema });
    })
    .catch(error => {
        console.error('Error:', error);
    });
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.namePage}>Snupie</Text>
          <View style={styles.squareSignUp}>
            <Text style={styles.titleSignUp}>Sign Up</Text>
            <View style={styles.formContainer}>
              <Text style={styles.label}>Nombre Completo:</Text>
              <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Nombre Completo"
              />
              <Text style={styles.label}>Cédula:</Text>
              <TextInput
                style={styles.input}
                value={cedula}
                onChangeText={setCedula}
                placeholder="Cédula"
              />
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
              />
              <Text style={styles.label}>Departamento al que pertenece:</Text>
              <TextInput
                style={styles.input}
                value={departamento}
                onChangeText={setDepartamento}
                placeholder="Departamento"
              />
              <Text style={styles.label}>Teléfono:</Text>
              <TextInput
                style={styles.input}
                value={telefono}
                onChangeText={setTelefono}
                placeholder="Teléfono"
                keyboardType="phone-pad"
              />
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={registrarUsuario}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#749691',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Celeste
  },
  squareSignUp: {
    backgroundColor: '#1E3731',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleSignUp: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF'
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'#FFFFFF'
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buttonSignUp: {
    backgroundColor: '#3E9994',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});