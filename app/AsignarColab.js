import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AsignarColab({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [selectedEliminar, setSelectedEliminar] = useState('');
    const [colaboradoresEliminar, setColaboradoresEliminar] = useState([]);


    const proyectos = [ 'Proyecto 1', 'Proyecto 2', 'Proyecto 3' ];

    const proyectoColaboradores = { // Colaboradores por proyecto
    'Proyecto 1': ['Colaborador 1', 'Colaborador 2'],
    'Proyecto 2': ['Colaborador 2', 'Colaborador 3'],
    'Proyecto 3': ['Colaborador 1', 'Colaborador 3']
    };

    const colaboradores = [ 'Colaborador 1', 'Colaborador 2', 'Colaborador 3' ]; // Colaboradores disponibles

    const asignarColaborador = () => {
      var datos = {
        idProyecto: selectedProyecto,
        idUsuario: selectedColaborador
      };

      Alert.alert('Colaborador Asignado', `Proyecto: ${datos.idProyecto} \nColaborador: ${datos.idUsuario}`);
    };

    const eliminarColaborador = () => {
      var datos = {
        idUsuario: selectedEliminar,
        idProyecto: selectedProyecto
      }

      Alert.alert('Colaborador Eliminado', `Colaborador: ${datos.idUsuario} \nProyecto: ${datos.idProyecto}`)
    };

    const cargarProyectos = () => {
      return proyectos.map((proyecto) => {
          return <Picker.Item label={proyecto} value={proyecto} key={proyecto} />;
      });
    };

    const cargarColaboradores = () => {
      return colaboradores.map((colaborador) => {
          return <Picker.Item label={colaborador} value={colaborador} key={colaborador} />;
      });
    };


    // Actualizar colaboradores a eliminar al cambiar de proyecto
    useEffect(() => {
      if (selectedProyecto) {
        setColaboradoresEliminar(proyectoColaboradores[selectedProyecto] || []); // Si no hay colaboradores, se asigna un arreglo vacío
        setSelectedEliminar('');
      }
    }, [selectedProyecto]);

    const cargarEliminarColab = () => {
      return colaboradoresEliminar.map((colaborador) => {
          return <Picker.Item label={colaborador} value={colaborador} key={colaborador} />;
      });
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
                    {cargarProyectos()}
                  </Picker>
                </View>
                <View style={styles.item}>
                  <Text style={styles.label}>Seleccione el colaborador a asignar:</Text>
                  <Picker
                      selectedValue={selectedColaborador}
                      style={styles.select}
                      onValueChange={(itemValue) => setSelectedColaborador(itemValue)}
                  >
                    {cargarColaboradores()}
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
                  {cargarEliminarColab()}
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