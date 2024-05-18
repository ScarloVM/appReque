import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CrearForo({ navigation }) {
  const [selectedProyecto, setSelectedProyecto] = useState('');

  const crearForo = () => {
    // Lógica para crear el foro
  };
  
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.namePage}>Snupie</Text>
      <View style={styles.squareCrearForo}>
        <Text style={styles.tituloCrearForo}>Crear foro</Text>
        <View style={styles.datosCrearForo}>
          <Text style={styles.label}>Proyecto:</Text>
          <Picker
            selectedValue={selectedProyecto}
            style={styles.select}
            onValueChange={(itemValue) => setSelectedProyecto(itemValue)}
          >
            <Picker.Item label="Público" value="publico" />
          </Picker>
          <Text style={styles.label}>Tema:</Text>
          <TextInput
            style={styles.input}
            placeholder="Tema"
          />
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Descripción"
            multiline
          />
          <TouchableOpacity
            style={styles.button}
            onPress={crearForo}>
            <Text style={styles.buttonText}>Crear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#749691',
    justifyContent: 'center',
    alignItems: 'center',
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  squareCrearForo: {
    width: '80%',
    backgroundColor: '#1E3731',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloCrearForo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  datosCrearForo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  select: {
    width: 290,
    height: 40,
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#000000',
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: '#000000',
  },
  textArea: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
    color: '#000000',
  },
  button: {
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