import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const ConsultaProyecto = ({navigation}) => {
  const [nombreProyecto, setNombreProyecto] = useState('Proyecto de Prueba');
  const [proyectos, setProyectos] = useState([]);
  const [tareasPorHacer, setTareasPorHacer] = useState([]);
  const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  useEffect(() => {
    // Aquí puedes cargar los datos de los proyectos desde una API o algún otro origen de datos
    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projects')
      .then(response => response.json())
      .then(data => {
        setProyectos(data[0].map(item => [item.idProyecto, item.Nombre]));
      })
      .catch(error => console.error(error));
  }, []);

  const cargarTareas = (proyecto) => {
    fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/projectTasks/${proyecto[0]}`)
      .then(response => response.json())
      .then(data => {
        const tareas = data[0];
        setNombreProyecto(proyecto[1]);

        const tareasPorHacer = tareas.filter(tarea => tarea.estado === 'Pendiente');
        const tareasEnProgreso = tareas.filter(tarea => tarea.estado === 'En proceso');
        const tareasFinalizadas = tareas.filter(tarea => tarea.estado === 'Completada');

        setTareasPorHacer(tareasPorHacer);
        setTareasEnProgreso(tareasEnProgreso);
        setTareasFinalizadas(tareasFinalizadas);
      })
      .catch(error => console.error(error));
  };

  const seleccionarProyecto = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    cargarTareas(proyecto);
  };

  return (
    <ScrollView>
      <View style={styles.backgroundStyle}>
        <Text style={styles.namePage}>Snupie</Text>
        <TouchableOpacity
            style = {styles.botonTableroSeguimiento}  
            onPress={() => navigation.navigate('TableroSeguimiento')}
            >
            <Text style = {styles.title}>Tablero de seguimiento</Text>

        </TouchableOpacity>
        <View style={styles.divIzquierdo}>
          <Text style={styles.title}>Proyectos en Curso</Text>
          <ScrollView style={styles.divBotones} nestedScrollEnabled>
            {proyectos.map((proyecto, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.proyectoButton, proyectoSeleccionado === proyecto ? styles.proyectoButtonSelected : null]}
                onPress={() => seleccionarProyecto(proyecto)}
              >
                <Text style={styles.proyectoButtonText}>{proyecto[1]}</Text>
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
                <Text>{tarea.nombre}</Text>
                <Text>Asignada a: {tarea.responsable}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.subtitle}>Tareas en Progreso</Text>
          <View style={styles.tareasContainer}>
            {tareasEnProgreso.map((tarea, index) => (
              <View key={index} style={styles.tarea}>
                <Text>{tarea.nombre}</Text>
                <Text>Asignada a: {tarea.responsable}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.subtitle}>Tareas Finalizadas</Text>
          <View style={styles.tareasContainer}>
            {tareasFinalizadas.map((tarea, index) => (
              <View key={index} style={styles.tarea}>
                <Text>{tarea.nombre}</Text>
                <Text>Asignada a: {tarea.responsable}</Text>
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
  proyectoButtonSelected: {
    backgroundColor: '#1E6E5F',
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
  botonTableroSeguimiento: {
    backgroundColor: '#1E3731',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: 'center',
  },

});

export default ConsultaProyecto;
