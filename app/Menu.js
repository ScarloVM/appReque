import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


export default function Menu({route, navigation }) {
    const email = route.params.email;
    Alert.alert('Datos recibidos', `Email: ${email}`);

    const enviarAAsignarColab = () => {
        navigation.navigate('AsignarColab');
    };

    const enviarAModColab = () => {
        navigation.navigate('ModificarColab');
    };

    const enviarACrearProyecto = () => {
        navigation.navigate('CrearProyecto');
    };

    const enviarAConsultarProyecto = () => {
    // Lógica para enviar a la página de consulta de proyectos
    };

    const enviarAModProyecto = () => {
        navigation.navigate('ModProyecto');
    };

    const enviarACrearReunion = () => {
    // Lógica para enviar a la página de creación de reuniones
    };

    const enviarAInformeGeneral = () => {
    // Lógica para enviar a la página de informe general
    };

    const enviarAForos = () => {
        navigation.navigate('CrearForo');
    };

    return (
        <View style={styles.backgroundStyle}>
            <Text style={styles.namePage}>Snupie</Text>
            <View style={styles.squareMenu}>
                <TouchableOpacity style={styles.button} onPress={enviarAAsignarColab}>
                <Text style={styles.buttonText}>Asignación de colaboradores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAModColab}>
                <Text style={styles.buttonText}>Modificar información colaborador</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarACrearProyecto}>
                <Text style={styles.buttonText}>Creación de Proyectos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAConsultarProyecto}>
                <Text style={styles.buttonText}>Consulta de Proyectos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAModProyecto}>
                <Text style={styles.buttonText}>Modificar información proyecto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarACrearReunion}>
                <Text style={styles.buttonText}>Crear Reunion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAInformeGeneral}>
                <Text style={styles.buttonText}>Informe General</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAInformeGeneral}>
                <Text style={styles.buttonText}>Informe Tiempo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAInformeGeneral}>
                <Text style={styles.buttonText}>Informe Gastos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={enviarAForos}>
                <Text style={styles.buttonText}>Foros</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
    flex: 1,
    backgroundColor: '#749691',
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  namePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Texto blanco
  },
  squareMenu: {
    borderRadius: 10,
    padding: 20,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#1E3731', // Verde azulado
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});
