import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function InformeTiempo({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [ListaProyectos, setListaProyectos] = useState([]);
    const [promedioTiempo, setPromedioTiempo] = useState(null);

    useEffect(() => {
      fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projects')
      .then(response => response.json())
      .then (data => {
        var jsonData= data[0];
        console.log(jsonData);
        var ListaProyectos = jsonData.map(item => [item.idProyecto, item.Nombre]);
        setListaProyectos(ListaProyectos || []); // Si no hay proyectos, se asigna un arreglo vacío
      });
    }, []);

    const cargarProyectos = () => {
      return ListaProyectos.map((proyecto) => {
          return <Picker.Item label={proyecto[1]} value={proyecto[0]} key={proyecto} />;
      });
    };

    const handleSelectChange = (itemValue) => {
        setSelectedProyecto(itemValue);
        console.log("Proyecto seleccionado:", itemValue);
        fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/getInformes/${itemValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const promedioHoras = data[0].map(item => item.PromedioHorasDesarrollo);
            console.log(promedioHoras);
            setPromedioTiempo(promedioHoras);
            // Aquí puedes hacer algo con la respuesta del servidor si es necesario
        })
    };

    return (
        <View style={styles.backgroundStyle}>
            <Text style={styles.namePage}>Snupie</Text>
            <View style={styles.box}>
                <Text style={styles.label}>Seleccione el proyecto:</Text>
                <Picker
                    selectedValue={selectedProyecto}
                    style={styles.select}
                    onValueChange={handleSelectChange}
                >
                    <Picker.Item label={"Todos"} value={0} />
                    {cargarProyectos()}
                </Picker>
            </View>
            <View style={styles.box}>
                <Text style={styles.label}>Promedio de tiempo de las tareas del proyecto:</Text>
                <Text style={styles.label}>Horas: {promedioTiempo}</Text>
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
    box: {
        width: 360,
        marginBottom: 20,
        backgroundColor: '#1E3731',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#FFFFFF',
    },
    select: {
        width: 320,
        height: 40,
        marginBottom: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        paddingHorizontal: 15,
        color: '#000000',
    },
});