import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TableroSeguimiento = () => {
    const [tareasPorHacer, setTareasPorHacer] = useState([]);
    const [tareasEnProgreso, setTareasEnProgreso] = useState([]);
    const [tareasFinalizadas, setTareasFinalizadas] = useState([]);

    useEffect(() => {
        // Aquí puedes cargar los datos de las tareas desde una API o algún otro origen de datos
        fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/getAllTasks')
            .then(response => response.json())
            .then(data => {
                const tareas = data[0];
                console.log('--------------------------------------------------------')

                const tareasPorHacer = tareas.filter(tarea => tarea.idEstado === 1);
                const tareasEnProgreso = tareas.filter(tarea => tarea.idEstado === 2);
                const tareasFinalizadas = tareas.filter(tarea => tarea.idEstado === 3);

                setTareasPorHacer(tareasPorHacer);
                setTareasEnProgreso(tareasEnProgreso);
                setTareasFinalizadas(tareasFinalizadas);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <ScrollView>
            <View style={styles.backgroundStyle}>
                <Text style={styles.namePage}>Snupie</Text>
                <View style={styles.divDerecho}>
                    <Text style={styles.subtitle}>Tareas por Hacer</Text>
                    <View style={styles.tareasContainer}>
                        {tareasPorHacer.map((tarea, index) => (
                            <View key={index} style={styles.tarea}>
                                <Text>{tarea.descripcion}</Text>
                                <Text>Asignada a: {tarea.nombreUsuario}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.subtitle}>Tareas en Progreso</Text>
                    <View style={styles.tareasContainer}>
                        {tareasEnProgreso.map((tarea, index) => (
                            <View key={index} style={styles.tarea}>
                                <Text>{tarea.descripcion}</Text>
                                <Text>Asignada a: {tarea.nombreUsuario}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.subtitle}>Tareas Finalizadas</Text>
                    <View style={styles.tareasContainer}>
                        {tareasFinalizadas.map((tarea, index) => (
                            <View key={index} style={styles.tarea}>
                                <Text>{tarea.descripcion}</Text>
                                <Text>Asignada a: {tarea.nombreUsuario}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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

export default TableroSeguimiento;
