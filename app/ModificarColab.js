import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ModificarColab({ navigation }) {
    const modificarInfo = () => {
    // Lógica para modificar la información del colaborador
    };

    return(
    <View style={styles.backgroundStyle}>
      <Text style={styles.namePage}>Snupie</Text>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.Text}>Seleccione el colaborador:</Text>
          <Picker
            style={styles.selectColab}
            selectedValue={null}
            onValueChange={(itemValue, itemIndex) => {
              // Lógica para seleccionar el colaborador
            }}
          >
            {/* Aquí deberías llenar las opciones con los colaboradores disponibles */}
            <Picker.Item label="Colaborador 1" value="colab1" />
            <Picker.Item label="Colaborador 2" value="colab2" />
          </Picker>
        </View>
        <View style={styles.box2}>
          <Text style={styles.Text}>Nuevos Datos</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Departamento al que pertenece" />
          <TextInput style={styles.input} placeholder="Telefono" />
          <Picker
            style={styles.selectEstado}
            selectedValue={1} // Valor inicial
            onValueChange={(itemValue, itemIndex) => {
              // Lógica para seleccionar el estado
            }}
          >
            <Picker.Item label="Disponible" value={1} />
            <Picker.Item label="Ocupado" value={2} />
          </Picker>
          <Picker
            style={styles.selectRol}
            selectedValue={null} // Valor inicial
            onValueChange={(itemValue, itemIndex) => {
              // Lógica para seleccionar el rol
            }}
          >
            <Picker.Item label="Administrador" value={1} />
            <Picker.Item label="Colaborador" value={2} />
          </Picker>
          <TouchableOpacity style={styles.buttonActualizar} onPress={modificarInfo}>
            <Text style={styles.buttonText}>Actualizar</Text>
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
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20, // Añade un espacio en los lados
    marginTop: 20, // Añade margen en la parte superior
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Texto blanco
  },
  box1: {
    backgroundColor: '#1E3731',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    marginBottom: 20, // Espacio entre las cajas
    width:340,
    height:130
  },
  Text:{
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  box2: {
    backgroundColor: '#1E3731',
    borderRadius: 9,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    width: 340,
  },
  selectColab: {
    backgroundColor: '#F2F2F2',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  selectEstado: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  selectRol: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buttonActualizar: {
    backgroundColor: '#3E9994',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
});
