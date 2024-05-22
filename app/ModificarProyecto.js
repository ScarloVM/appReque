import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function ModificarProyecto({ navigation }) {
    const [selectedProyecto, setSelectedProyecto] = useState('');
    const [proyectos, setProyectos] = useState([]);
    const [tareas, setTareas] = useState([]);
    const [colaboradores, setColaboradores] = useState([]);
    const [nombreTarea, setNombreTarea] = useState('');
    const [recursosEconomicosTarea, setRecursosEconomicosTarea] = useState('');
    const [tiempoEstimadoTarea, setTiempoEstimadoTarea] = useState('');
    const [estadoTarea, setEstadoTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [selectedColab, setSelectedColab] = useState('');
    const [storyPointsTarea, setStoryPointsTarea] = useState('');

    useEffect(() => {
        fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/projects')
            .then(response => response.json())
            .then(data => {
                const listaProyectos = data[0].map(item => ({ id: item.idProyecto, nombre: item.Nombre }));
                setProyectos(listaProyectos);
                if (listaProyectos.length > 0) {
                    setSelectedProyecto(listaProyectos[0].id);
                }
            });
    }, []);


    useEffect(() => {
        if (selectedProyecto) {
            cargarUsuariosDelProyecto(selectedProyecto);
            cargarTareas(selectedProyecto);
        }
    }, [selectedProyecto]);

    const cargarUsuariosDelProyecto = (idProyecto) => {
        fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/projectWorkers/${idProyecto}`)
            .then(response => response.json())
            .then(data => {
                const usuarios = data[0].map(item => ({ id: item.idUsuario, nombre: item.nombre, correo: item.correoElectronico }));
                setColaboradores(usuarios);
                setCorreos(usuarios.map(usuario => usuario.correo));
            });
    };

    const cargarTareas = (idProyecto) => {
        fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/getProjectTasks/${idProyecto}`)
            .then(response => response.json())
            .then(data => {
                setTareas(data[0]);
                console.log(data[0]);
            });
    };

    const AgregarTarea = () => {
        var datos = {
            idProyecto: parseInt(selectedProyecto),
            nombre: nombreTarea,
            descripcion: descripcionTarea,
            usuario: selectedColab,
            storyPoints: storyPointsTarea
        };
        console.log(datos);

        fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/createTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
            .then(response => response.json())
            .then(data => {
                cargarTareas(selectedProyecto);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const finalizarTarea = (idTarea, nombreTarea) => {
        console.log(idTarea);
        fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/endTask/${idTarea}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
            .then(response => {
                if (response.ok) {
                    
                    alert('La tarea fue finalizada correctamente.');
                    cargarTareas(selectedProyecto);
                } else {
                    console.error('Error al intentar finalizar la tarea.');
                }
            })
            .catch(error => {
                console.error('Hubo un error en la solicitud de finalización:', error);
            });
    };

    const eliminarTarea = (idTarea) => {
        fetch(`https://api-snupie-saap7xdoua-uc.a.run.app/api/deleteTask/${idTarea}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('La tarea fue eliminada correctamente.');
                    cargarTareas(selectedProyecto);
                } else {
                    console.error('Error al intentar eliminar la tarea.');
                }
            })
            .catch(error => {
                console.error('Hubo un error en la solicitud de eliminación:', error);
            });
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
                            {proyectos.map(proyecto => (
                                <Picker.Item key={proyecto.id} label={proyecto.nombre} value={proyecto.id} />
                            ))}
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
                            placeholder="Recursos Económicos Necesarios"
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
                            {colaboradores.map(colab => (
                                <Picker.Item key={colab.id} label={colab.nombre} value={colab.id} />
                            ))}
                        </Picker>
                        <Text style={styles.label}>Story Points:</Text>
                        <TextInput
                            style={styles.input}
                            value={storyPointsTarea}
                            onChangeText={setStoryPointsTarea}
                            placeholder="Story Points"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.button} onPress={AgregarTarea}>
                            <Text style={styles.buttonText}>Agregar Tarea</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listaTareasBox}>
                        <Text style={styles.titulo}>Tareas</Text>
                        {tareas.map(tarea => (
                            <View key={tarea.id} style={styles.tarea}>
                                <Text style={styles.tareaTexto}>Nombre: {tarea.nombre}</Text>
                                <Text style={styles.tareaTexto}>Descripción: {tarea.descripcion}</Text>
                                <Text style={styles.tareaTexto}>Story Points: {tarea.storyPoints}</Text>
                                <Text style={styles.tareaTexto}>Usuario Asignado: {tarea.UsuarioACargo}</Text>
                                <Text style={styles.tareaTexto}>Estado: {tarea.idEstado}</Text>
                                <View style={styles.tareaAcciones}>
                                <TouchableOpacity style={styles.button} onPress={() => finalizarTarea(tarea.idTarea, tarea.nombre)}>
                                    <Text style={styles.buttonText}>Finalizar</Text>
                                </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => eliminarTarea(tarea.idTarea)}>
                                        <Text style={styles.buttonText}>Eliminar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
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
