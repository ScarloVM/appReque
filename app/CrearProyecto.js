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
  const [colaboradores, setColaboradores] = React.useState([]);
  const [ColabsAProyecto, setColabsAProyecto] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/usersNotAsigned')
        .then(response => response.json())
        .then(data => {
          var jsonData=data[0];
          console.log(jsonData);
          var colaboradores = jsonData.map(item => [item.idUsuario, item.nombre])
          setColaboradores(colaboradores || []); // Si no hay colaboradores, se asigna un arreglo vacío
        });
  }, []);

    const agregarColab = () => {
      if (selectedColaborador && !colaboradoresProyecto.includes(selectedColaborador)) {
        console.log(selectedColaborador);
        setColaboradoresProyecto([...colaboradoresProyecto, selectedColaborador[1]]);
        setColabsAProyecto([...ColabsAProyecto, selectedColaborador[0]]);
        setSelectedColaborador('');
      } else {
        Alert.alert('Colaborador ya agregado o no seleccionado');
      }
    };
  

  const crearProyecto = () => {

    var datos = {
      nombre: nombreProyecto,
      recursosNecesarios: recursosNecesarios,
      presupuesto: parseInt(presupuesto),
      responsable: selectedResponsable,
      descripcion: descripcion,
      fechaInicio: fechaInicio
    };

    fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/createProject', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        alert("Se ha creado el proyecto correctamente");
        var idProyecto = data['@respuesta'];

        ColabsAProyecto.forEach(function(idColab, index) {
            var datos = {
                idProyecto:idProyecto,
                idUsuario:idColab
            }

            console.log(JSON.stringify(datos));
            fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/asignProject', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);// Aquí puedes hacer algo con la respuesta del servidor si es necesario
                setColabsAProyecto([]);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })

    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  const cargarResponsables = () => {
    return colaboradores.map((responsable) => (
      <Picker.Item label={responsable[1]} value={responsable[0]} key={responsable} />
    ));
  }

  const cargarColaborador = () => {
    return colaboradores.map((colaborador) => (
      <Picker.Item label={colaborador[1]} value={colaborador} key={colaborador} />
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
          onChangeText={setNombreProyecto}
          value={nombreProyecto}
        />
        <Text style={styles.label}>Recursos Necesarios:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Recursos Necesarios"
          multiline
          onChangeText={setRecursosNecesarios}
          value={recursosNecesarios}
        />
        <Text style={styles.label}>Presupuesto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Presupuesto"
          keyboardType="numeric"
          onChangeText={setPresupuesto}
          value={presupuesto}
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
          onChangeText={setDescripcion}
          value={descripcion}
        />
        <Text style={styles.label}>Fecha de Inicio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fecha de Inicio"
          onChangeText={setFechaInicio}
          value={fechaInicio}
        />
        <Text style={styles.label}>Historial de Cambios:</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Historial de Cambios"
          multiline
          onChangeText={setHistorialCambios}
          value={historialCambios}
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