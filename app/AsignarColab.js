import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AsignarColab({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [selectedEliminar, setSelectedEliminar] = useState('');
    const [ListaProyectos, setListaProyectos] = useState([]);
    const [ListaColaboradoresSinProyecto, setListaColaboradoresSinProyecto] = useState([]);
    const [colaboradoresEliminar, setColaboradoresEliminar] = useState([]);

    useEffect(() => {
      fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projects')
      .then(response => response.json())
      .then (data => {
        var jsonData= data[0];
        var ListaProyectos = jsonData.map(item => [item.idProyecto, item.Nombre]);
        setListaProyectos(ListaProyectos || []); // Si no hay proyectos, se asigna un arreglo vacío
      });
      
      fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/usersNotAsigned')
      .then(response => response.json())
      .then(data => {
        var jsonData=data[0];
        var ListaColaboradoresSinProyecto = jsonData.map(item => [item.idUsuario, item.nombre])
        setListaColaboradoresSinProyecto(ListaColaboradoresSinProyecto || []); // Si no hay colaboradores, se asigna un arreglo vacío
      });
    }, []);

    const asignarColaborador = () => {
      var datos = {
        idProyecto: selectedProyecto,
        idUsuario: selectedColaborador
      };

      fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/asignProject', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
      })
      .then(response => response.json())
      .then(data => {
          Alert.alert("El colaborador ha sido asignado correctamente", `Proyecto: ${datos.idProyecto} \nColaborador: ${datos.idUsuario}`);
          console.log(data);// Aquí puedes hacer algo con la respuesta del servidor si es necesario
      })
      .catch(error => {
          console.error('Error:', error);
      });
    };

    const eliminarColaborador = () => { //Arreglar eliminar colaborador
      console.log(selectedEliminar);
      console.log(selectedProyecto);
      var datos = {
        idUsuario: selectedEliminar,
        idProyecto: selectedProyecto
      }

      // fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/deleteUserProject/', {
      //   method: 'DELETE',
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(datos)
          
      // })
      // .then(response => {
      //   if (response.ok) {
      //     // La solicitud de eliminación fue exitosa
      //     Alert.alert('El colaborador fue eliminado correctamente.');
      //   } else {
      //       // La solicitud de eliminación falló
      //       console.error('Error al intentar eliminar al colaborador.');
      //   }
      // })
      // .catch(error => {
      //   // Manejar errores de red u otros errores
      //   console.error('Hubo un error en la solicitud de eliminación:', error);
      // });
    };

    const cargarProyectos = () => {
      return ListaProyectos.map((proyecto) => {
          return <Picker.Item label={proyecto[1]} value={proyecto[0]} key={proyecto} />;
      });
    };

    const cargarColaboradores = () => {
      return ListaColaboradoresSinProyecto.map((colaborador) => {
          return <Picker.Item label={colaborador[1]} value={colaborador[0]} key={colaborador} />;
      });
    };


    // Actualizar colaboradores a eliminar al cambiar de proyecto
    useEffect(() => {
      if (selectedProyecto) {
        fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projectWorkers/'+parseInt(selectedProyecto))
        .then(response => response.json())
        .then (data => {
          var jsonData = data[0];
          var usuarios = jsonData.map(item => [item.idUsuario, item.nombre])
          console.log(usuarios);
          setColaboradoresEliminar(usuarios || []); // Si no hay colaboradores, se asigna un arreglo vacío
          setSelectedEliminar('');
        })
      }
    }, [selectedProyecto]);

    const cargarEliminarColab = () => {
      return colaboradoresEliminar.map((colaborador) => {
        return <Picker.Item label={colaborador[1]} value={colaborador[0]} key={colaborador} />;
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