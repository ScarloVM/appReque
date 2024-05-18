import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function ModificarProyecto({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [nombreTarea, setNombreTarea] = useState('');
    const [recursosEconomicosTarea, setRecursosEconomicosTarea] = useState('');
    const [tiempoEstimadoTarea, setTiempoEstimadoTarea] = useState('');
    const [estadoTarea, setEstadoTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [selectedColab, setSelectedColab] = useState('');
    const [storyPointsTarea, setStoryPointsTarea] = useState('');

    const cambiarDatos = () => {
        // Lógica para cambiar datos
    };

    const AgregarTarea = () => {
        // Lógica para agregar tarea
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.backgroundStyle}>
                <Text style={styles.namePage}>Snupie</Text>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.label}>Seleccione el proyecto:</Text>
                        <Picker
                            selectedValue={selectedProyecto}
                            style={styles.select}
                            onValueChange={(itemValue) => setSelectedProyecto(itemValue)}
                        >
                            {/* Opciones del Picker */}
                        </Picker>
                    </View>

                    <View style={styles.agregarTareaBox}>
                        <Text style={styles.titulo}>Agregar Tarea</Text>
                        <Text style={styles.label}>Nombre:</Text>
                        <TextInput
                            style={styles.input}
                            value={nombreTarea}
                            onChangeText={setNombreTarea}
                            placeholder="Nombre"
                        />
                        <Text style={styles.label}>Recursos Económicos Necesarios:</Text>
                        <TextInput
                            style={styles.input}
                            value={recursosEconomicosTarea}
                            onChangeText={setRecursosEconomicosTarea}
                            placeholder="Recursos Economicos Necesarios"
                        />
                        <Text style={styles.label}>Tiempo Estimado de Desarrollo:</Text>
                        <TextInput
                            style={styles.input}
                            value={tiempoEstimadoTarea}
                            onChangeText={setTiempoEstimadoTarea}
                            placeholder="Tiempo Esperado de Desarrollo"
                        />
                        <Text style={styles.label}>Estado:</Text>
                        <Picker
                            selectedValue={estadoTarea}
                            style={styles.select}
                            onValueChange={(itemValue) => setEstadoTarea(itemValue)}
                        >
                            {/* Opciones del Picker */}
                            <Picker.Item label="En Proceso" value="En Proceso" />
                            <Picker.Item label="Finalizado" value="Finalizado" />
                            <Picker.Item label="Pendiente" value="Pendiente" />
                        </Picker>
                        <Text style={styles.label}>Descripción:</Text>
                        <TextInput
                            style={styles.textArea}
                            value={descripcionTarea}
                            onChangeText={setDescripcionTarea}
                            placeholder="Descripción"
                            multiline
                        />
                        <Text style={styles.label}>Asignar a:</Text>
                        <Picker
                            selectedValue={selectedColab}
                            style={styles.select}
                            onValueChange={(itemValue) => setSelectedColab(itemValue)}
                        >
                            {/* Opciones del Picker */}
                        </Picker>
                        <Text style={styles.label}>Story Points:</Text>
                        <TextInput
                            style={styles.input}
                            value={storyPointsTarea}
                            onChangeText={setStoryPointsTarea}
                            placeholder="Story Points"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={AgregarTarea}>
                            <Text style={styles.buttonText}>Agregar Tarea</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.boxTareasGenerales}>
                        <Text style={styles.titulo}>Tareas</Text>
                        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} nestedScrollEnabled>
                            <View style={styles.tareasContainer}>
                                <View style={styles.boxTarea}>
                                    <Text style={styles.tareaText}>Tarea 01</Text>
                                    <View style={styles.botonesContainer}>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Modificar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonEliminar}>
                                            <Text style={styles.buttonText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.boxTarea}>
                                    <Text style={styles.tareaText}>Tarea 02</Text>
                                    <View style={styles.botonesContainer}>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Modificar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonEliminar}>
                                            <Text style={styles.buttonText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.boxTarea}>
                                    <Text style={styles.tareaText}>Tarea 03</Text>
                                    <View style={styles.botonesContainer}>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Modificar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonEliminar}>
                                            <Text style={styles.buttonText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.boxTarea}>
                                    <Text style={styles.tareaText}>Tarea 04</Text>
                                    <View style={styles.botonesContainer}>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Modificar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonEliminar}>
                                            <Text style={styles.buttonText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.boxTarea}>
                                    <Text style={styles.tareaText}>Tarea 05</Text>
                                    <View style={styles.botonesContainer}>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Modificar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonAcciones}>
                                            <Text style={styles.buttonText}>Finalizar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.botonEliminar}>
                                            <Text style={styles.buttonText}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    backgroundStyle: {
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
        alignItems: 'center',
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
    agregarTareaBox: {
        width: 360,
        marginBottom: 30,
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
    boxTarea: {
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
    tareaText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    botonesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    botonAcciones: {
        backgroundColor: '#115511',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    botonEliminar: {
        backgroundColor: '#BB2222',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    scrollView: {
        maxHeight: 300,
    },
    tareasContainer: {
        paddingBottom: 20,
    },
    boxTareasGenerales: {
        width: 360,
        marginBottom: 20,
        backgroundColor: '#1E3731',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
