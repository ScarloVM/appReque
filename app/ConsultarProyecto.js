import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ConsultaProyecto = ({ navigation }) => {
  const [nombreProyecto, setNombreProyecto] = useState('Proyecto de Prueba');
  const [proyectos, setProyectos] = useState([]);
  const [tareasPorHacer, setTareasPorHacer] = useState([]);
  const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState([]);

  useEffect(() => {
    // Datos de prueba para los proyectos
    setProyectos(['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 465' ]);
    
    // Datos de prueba para las tareas
    setTareasPorHacer(['Tarea 1', 'Tarea 2', 'Tarea 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 1', 'Proyecto 2', 'Proyecto 465']);
    setTareasEnProgreso(['Tarea 4', 'Tarea 5']);
    setTareasFinalizadas(['Tarea 6']);
  }, []);

  const seleccionarProyecto = (nombre) => {
    setNombreProyecto(nombre);
    // Aquí podrías cargar las tareas específicas para el proyecto seleccionado
  };

  return (
    <ScrollView >
      <View style={styles.backgroundStyle}>
        <Text style={styles.namePage}>Snupie</Text>
        <View style={styles.divIzquierdo}>
          <Text style={styles.title}>Proyectos en Curso</Text>
          <ScrollView style={styles.divBotones} nestedScrollEnabled>
            {proyectos.map((proyecto, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.proyectoButton} 
                onPress={() => seleccionarProyecto(proyecto)}
              >
                <Text style={styles.proyectoButtonText}>{proyecto}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.divDerecho}>
          <Text style={styles.projectName}>{nombreProyecto}</Text>
          <Text style={styles.subtitle}>Tareas por Hacer</Text>
          <View style={styles.tareasContainer}>
            {tareasPorHacer.map((tarea, index) => (
              <View key={index} style={styles.tarea}>
                <Text>{tarea}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.subtitle}>Tareas en Progreso</Text>
          <View style={styles.tareasContainer}>
            {tareasEnProgreso.map((tarea, index) => (
              <View key={index} style={styles.tarea}>
                <Text>{tarea}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.subtitle}>Tareas Finalizadas</Text>
          <View style={styles.tareasContainer}>
            {tareasFinalizadas.map((tarea, index) => (
              <View key={index} style={styles.tarea}>
                <Text>{tarea}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#749691',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  divIzquierdo: {
    width: '100%',
    backgroundColor: '#1E3731',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  divBotones: {
    marginBottom: 20,
  },
  proyectoButton: {
    backgroundColor: '#3E9994',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  proyectoButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divDerecho: {
    width: '100%',
    backgroundColor: '#1E3731',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  projectName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  tareasContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tarea: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default ConsultaProyecto;
