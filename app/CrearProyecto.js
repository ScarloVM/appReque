import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CrearProyecto({ navigation }) {
  const [nombreProyecto, setNombreProyecto] = React.useState('');
  const [recursosNecesarios, setRecursosNecesarios] = React.useState('');
  const [presupuesto, setPresupuesto] = React.useState('');
  const [selectedResponsable, setSelectedResponsable] = React.useState(''); //Cambiar a Picker
  const [selectedColaborador, setSelectedColaborador] = React.useState(''); //Cambiar a Picker
  const [colaboradoresProyecto, setColaboradoresProyecto] = React.useState([]);
  const [descripcion, setDescripcion] = React.useState('');
  const [fechaInicio, setFechaInicio] = React.useState('');
  const [historialCambios, setHistorialCambios] = React.useState('');

  const colaboradores = ['Colaborador 1', 'Colaborador 2', 'Colaborador 3', 'Colaborador 4', 'Colaborador 5'];
  const responsables = ['Responsable 1', 'Responsable 2', 'Responsable 3'];

  var colabsAProyecto = [];


  const agregarColab = () => {
    if (selectedColaborador && !colaboradoresProyecto.includes(selectedColaborador)) {
      console.log(colaboradoresProyecto);
      setColaboradoresProyecto([...colaboradoresProyecto, selectedColaborador]);
      setSelectedColaborador('');
    } else {
      Alert.alert('Colaborador ya agregado o no seleccionado');
    }
  };

  const crearProyecto = () => {
    
    var datos = {
      nombre: nombreProyecto,
      recursosNecesarios: recursosNecesarios,
      presupuesto: presupuesto,
      responsable: responsable,
      descripcion: descripcion,
      fechaInicio: fechaInicio
    };

    //Agregar Fetch para enviar datos a la API
  }

  const cargarResponsables = () => {
    return responsables.map((responsable) => (
      <Picker.Item label={responsable} value={responsable} key={responsable} />
    ));
  }

  const cargarColaborador = () => {
    colabsAProyecto.push(selectedColaborador)
    return colaboradores.map((colaborador) => (
      <Picker.Item label={colaborador} value={colaborador} key={colaborador} />
    ));
  }

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.namePage}>Snupie</Text>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Nombre del Proyecto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del Proyecto"
        />
        <Text style={styles.label}>Recursos Necesarios:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Recursos Necesarios"
          multiline
        />
        <Text style={styles.label}>Presupuesto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Presupuesto"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Responsable:</Text>
        <Picker
          selectedValue={selectedResponsable}
          style={styles.select}
          onValueChange={(itemValue) => setSelectedResponsable(itemValue)}
        >
          {cargarResponsables()}
        </Picker>
        <Text style={styles.label}>Colaboradores:</Text>
        <Picker
          selectedValue={selectedColaborador}
          style={styles.select}
          onValueChange={(itemValue) => setSelectedColaborador(itemValue)}
        >
          {cargarColaborador()}
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={agregarColab}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Colaboradores en el Proyecto:</Text>
        <ScrollView style={styles.view}>
          <View>
            {colaboradoresProyecto.map((colaborador, index) => (
              <Text key={index} style={styles.colaboradorItem}>{colaborador}</Text>
            ))}
          </View>
        </ScrollView>
        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Descripción"
          multiline
        />
        <Text style={styles.label}>Fecha de Inicio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fecha de Inicio"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Historial de Cambios:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Historial de Cambios"
          multiline
        />
        <TouchableOpacity
          style={styles.buttonCrear}
          onPress={() => crearProyecto()}>
          <Text style={styles.buttonText}>Crear Proyecto</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: '#749691',
        justifyContent: 'center', // Centra el contenido verticalmente
    },
    container: {
        backgroundColor: '#1E3731',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 20,
        marginTop: 0,
        marginBottom: 20
    },
    namePage: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF', // Texto blanco
        marginLeft: 150,
        marginTop: 10,
    },
    label: {
        color:'#FFFFFF'
    },
    input: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    textArea: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        minHeight: 100,
    },
    view: {
        height: 200,
        width: '100%',
        marginBottom: 10,
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
        backgroundColor: '#3E9994',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonCrear: {
        backgroundColor: '#3E9994',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginBottom: 35,
    },
    buttonText: {
        color: '#FFFFFF', // Texto blanco
        fontSize: 18,
        fontWeight: 'bold',
    },
    colaboradorItem: {
        backgroundColor: '#F2F2F2',
        width: '100%',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
    }
});