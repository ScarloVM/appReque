import React, { useEffect, useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function ModificarColab({ navigation }) {
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [listaColaboradores, setListaColaboradores] = useState([]);
    const [selectedColab , setSelectedColab] = useState('');
    const [selectedEstado, setSelectedEstado] = useState('');
    const [selectedRol, setSelectedRol] = useState('');

    useEffect(() => {
    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/users')
        .then(response => response.json())
        .then(data => {
            var jsonData=data;
            console.log(jsonData);

            var ListaColaboradores = jsonData.map(item => [item.idUsuario, item.nombre])
            setListaColaboradores(ListaColaboradores || []); // Si no hay colaboradores, se asigna un arreglo vacío
        })
      }, []);
    const cargarColaboradores = () => {
      return listaColaboradores.map((colaborador) => {
          return <Picker.Item label={colaborador[1]} value={colaborador[0]} key={colaborador} />;
      });
    };

    const modificarInfo = () => {
      
    // Lógica para modificar la información del colaborador
      var datos = {
        "correoElectronico": correoElectronico,
        "departamento" : departamento,
        "numeroTelefono": numeroTelefono,
        "estado": parseInt(selectedEstado),
        "rol":parseInt(selectedRol) //Cambiar en el appService y Stored Procedure
    }

    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/updateUser/' + selectedColab, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        Alert.alert("El colaborador ha sido modificado correctamente");
        console.log(data);// Aquí puedes hacer algo con la respuesta del servidor si es necesario
    })
    .catch(error => {
        console.error('Error:', error);
    });
      console.log(JSON.stringify(datos));
    };

    

    

    return(
    <View style={styles.backgroundStyle}>
      <Text style={styles.namePage}>Snupie</Text>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.Text}>Seleccione el colaborador:</Text>
          <Picker
            style={styles.selectColab}
            selectedValue={selectedColab}
            onValueChange={(itemValue) => setSelectedColab(itemValue)}
          >
            {cargarColaboradores()}
          </Picker>
        </View>
        <View style={styles.box2}>
          <Text style={styles.Text}>Nuevos Datos</Text>
          <TextInput style={styles.input}
           placeholder="Email" 
           multiline
           onChangeText={setCorreoElectronico}
           value={correoElectronico}
           />
          <TextInput style={styles.input}
           placeholder="Departamento al que pertenece"
           multiline
           onChangeText={setDepartamento}
           value={departamento} />
          <TextInput style={styles.input}
           placeholder="Telefono"
           multiline
           onChangeText={setNumeroTelefono}
           value={numeroTelefono} 
           />
          <Picker
            style={styles.selectEstado}
            selectedValue={selectedEstado} // Valor inicial
            onValueChange={(itemValue) => setSelectedEstado(itemValue)}
          >
            <Picker.Item label="Disponible" value={1} />
            <Picker.Item label="Ocupado" value={2} />
          </Picker>
          <Picker
            style={styles.selectRol}
            selectedValue={selectedRol} // Valor inicial
            onValueChange={(itemValue) => setSelectedRol(itemValue)}
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
