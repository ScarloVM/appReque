import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AsignarColab({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [selectedEliminar, setSelectedEliminar] = useState('');

    const asignarColaborador = () => {
    // Lógica para asignar un colaborador
    };

    const eliminarColaborador = () => {
    // Lógica para eliminar un colaborador
    };


    return (
        <View style={styles.backgroundStyle}>
            <Text style={styles.namePage}>Snupie</Text>
            <View style={styles.container}>
                <View style={styles.item}>
                <Text style={styles.label}>Seleccione el proyecto:</Text>
                <Picker
                    selectedValue={selectedProyecto}
                    style={styles.select}
                    onValueChange={(itemValue) => setSelectedProyecto(itemValue)}
                >
                    <Picker.Item label="Proyecto 1" value="proyecto1" />
                    <Picker.Item label="Proyecto 2" value="proyecto2" />
                    <Picker.Item label="Proyecto 3" value="proyecto3" />
                </Picker>
                </View>
                <View style={styles.item}>
                <Text style={styles.label}>Seleccione el colaborador a asignar:</Text>
                <Picker
                    selectedValue={selectedColaborador}
                    style={styles.select}
                    onValueChange={(itemValue) => setSelectedColaborador(itemValue)}
                >
                    {/* Opciones del Picker */}
                </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={asignarColaborador}>
                <Text style={styles.buttonText}>Asignar Colaborador</Text>
                </TouchableOpacity>
                <View style={styles.item}>
                <Text style={styles.label}>Seleccione el colaborador a eliminar:</Text>
                <Picker
                    selectedValue={selectedEliminar}
                    style={styles.select}
                    onValueChange={(itemValue) => setSelectedEliminar(itemValue)}
                >
                    {/* Opciones del Picker */}
                </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={eliminarColaborador}>
                <Text style={styles.buttonText}>Eliminar Colaborador</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
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
  container: {
    width: '80%', // Ancho del contenedor principal
  },
  item: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  select: {
    width: '100%', // Ancho del Picker
    height: 40,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  button: {
    backgroundColor: '#1E3731',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
};