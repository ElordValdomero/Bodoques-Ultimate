import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Dialog from 'react-native-dialog';

const DiasDeLaSemana = () => {
  const [data, setData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    mostrarTabla();
  }, []);

  const mostrarTabla = () => {
    // Función para cargar datos de prueba. Reemplázala con la lógica de tu aplicación.
    const datosDePrueba = [
      { id: '1', temperatura: '25°C', lunes: 'OK', martes: 'OK', miercoles: 'OK', jueves: 'OK', viernes: 'OK', sabado: 'OK', domingo: 'OK' },
      { id: '2', temperatura: '30°C', lunes: 'N/A', martes: 'OK', miercoles: 'OK', jueves: 'N/A', viernes: 'OK', sabado: 'OK', domingo: 'N/A' },
      // Agrega más datos según tus necesidades
    ];

    setData(datosDePrueba);
  };

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'lightgray', paddingVertical: 10 }}>
      <View style={{ flex: 1 }}>
        <Text>{item.temperatura}</Text>
        <Text>{item.lunes}</Text>
        <Text>{item.martes}</Text>
        <Text>{item.miercoles}</Text>
        <Text>{item.jueves}</Text>
        <Text>{item.viernes}</Text>
        <Text>{item.sabado}</Text>
        <Text>{item.domingo}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Monitoreo</Text>

      <View>
        <View>
          <Dialog.Container visible={isDialogVisible}>
            <Dialog.Title>Actualizar Monitoreo</Dialog.Title>
            {/* Agrega más Dialog.Input según tus necesidades */}
            <Dialog.Input label="Temperatura" />
            <Dialog.Input label="lunes" />
            <Dialog.Input label="martes" />
            <Dialog.Input label="miercoles" />
            <Dialog.Input label="jueves" />
            <Dialog.Input label="Viernes" />
            <Dialog.Input label="Sabado" />
            <Dialog.Input label="Domingo" />

            <Dialog.Button label="Actualizar" onPress={hideDialog} />
            <Dialog.Button label="Cancelar" onPress={hideDialog} />
          </Dialog.Container>
        </View>
        
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Lista</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Button title="Mostrar Diálogo" onPress={showDialog} />
        </View>
      </View>
    </View>
  );
};

export default DiasDeLaSemana;
