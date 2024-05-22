import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CrearForo({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [temaC, setTema] = useState('');
    const [descripcionC, setDescripcion] = useState('');
    const [listaProyectos, setListaProyectos] = useState([])

    useEffect(() => {
    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projects')
        .then(response => response.json())
        .then(data => {
            var jsonData=data[0];
            console.log(jsonData);

            var ListaProyectos = jsonData.map(item => [item.idProyecto, item.Nombre])
            console.log(ListaProyectos);
            setListaProyectos(ListaProyectos || []); // Si no hay colaboradores, se asigna un arreglo vacío
        })
      }, []);
    const cargarProyectos = () => {
      return listaProyectos.map((proyecto) => {
          return <Picker.Item label={proyecto[1]} value={proyecto[0]} key={proyecto} />;
      });
    };



  const crearForo = () => {
    // Lógica para crear el foro

    var proyecto = parseInt(selectedProyecto)
    var tema = temaC
    var descripcion = descripcionC

    if (proyecto === '0') {
        proyecto = null;
    }

    var datos = {
        idProyecto:proyecto,
        tema:tema,
        idUsuario:1, //Crear Foro por el momento solo el 1
        descripcion:descripcion
    }

    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/createForum', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        Alert.alert("Se ha creado el foro");
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
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
            {cargarProyectos()}
          </Picker>
          <Text style={styles.label}>Tema:</Text>
          <TextInput
            style={styles.input}
            placeholder="Tema"
            multiline
            onChangeText={setTema}
            value={temaC}
          />
          <Text style={styles.label}>Descripción:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Descripción"
            multiline
            onChangeText={setDescripcion}
            value={descripcionC}
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