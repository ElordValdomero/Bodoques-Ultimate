import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const MonitoreoEnTiempoReal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    mostrarTabla();
  }, []);

  // Función para cargar datos de prueba. Reemplázala con la lógica de tu aplicación.
  const mostrarTabla = () => {
    const datosDePrueba = [
      { id: '1', temperatura: '25°C', ph: '7.2', nivelAgua: 'Normal', incidencias: 'Ninguna' },
      { id: '2', temperatura: '30°C', ph: '6.8', nivelAgua: 'Bajo', incidencias: 'Fuga detectada' },
      // Agrega más datos según tus necesidades
    ];

    setData(datosDePrueba);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'lightgray', paddingVertical: 10 }}>
      <View style={{ flex: 1 }}>
        <Text>{item.temperatura}</Text>
        <Text>{item.ph}</Text>
        <Text>{item.nivelAgua}</Text>
        <Text>{item.incidencias}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        Monitoreo en tiempo real
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 10 }}>
            {/* Input fields y botón aquí */}
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Lista</Text>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MonitoreoEnTiempoReal;
