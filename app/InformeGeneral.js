import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function InformeGeneral({ navigation }) {
    const [data, setdata] = React.useState(null);
    const screenWidth = Dimensions.get('window').width;


    React.useEffect(() => {
        fetch('https://api-snupie-saap7xdoua-uc.a.run.app/api/getTaskState')
            .then(response => response.json())
            .then(data => {
                // Filtrar solo los elementos del JSON que tienen nombre y cantidad
                const jsonData = data[0].filter(item => item.nombre && item.Cantidad);
                console.log(jsonData);
                // Obtener las etiquetas y los valores del JSON filtrado
                const labels = jsonData.map(item => item.nombre);
                console.log(labels);
                const values = jsonData.map(item => item.Cantidad);
                console.log(values);
                // Construir el objeto data para el gráfico
                const datos = {
                    labels: labels,
                    datasets: [{
                        label: 'Numero de Tareas', // Color de las barras
                        data: values
                    }]
                };
                setdata(datos);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);


    console.log(data);
    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForBackgroundLines: {
            strokeDasharray: '', // Solid background lines with no dashes
        },
        yAxisLabel: '',
        yAxisSuffix: '',
        yAxisInterval: 0, // optional, sets the number of intervals between tick marks
        fromZero: true, // Ensures the chart starts from zero
        decimalPlaces: 0,
    };
    return (
        <View style={styles.backgroundStyle}>
            <Text style={styles.namePage}>Snupie - Informe General</Text>
            {data ? (
                <BarChart
                    style={styles.chart}
                    data={data}
                    width={screenWidth - 16}
                    height={300}
                    yAxisLabel=""
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: '#749691',
        alignItems: 'center',
        justifyContent: 'center',
    },
    namePage: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
});