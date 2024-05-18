import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CrearProyecto({ navigation }) {
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
        <TextInput
          style={styles.input}
          placeholder="Responsable"
        />
        <Text style={styles.label}>Colaboradores:</Text>
        <TextInput
          style={styles.input}
          placeholder="Colaboradores"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => agregarColab()}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Colaboradores en el Proyecto:</Text>
        <ScrollView>
          <View>
            {/* Renderizar lista de colaboradores */}
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
});