import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa Picker del nuevo paquete
import { CurrentRenderContext } from '@react-navigation/native';

const RegistroUsuarios = () => {
  const registrarUsuario = () => {
    // Lógica para registrar usuario
    console.log('Registrando usuario...');
  };

  return (
    <View>
      <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
          Registro de Usuario
        </Text>
      </View>

      <View style={{ backgroundColor: 'lightblue', padding: 20, borderRadius: 5, margin: 10 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Nombre del usuario"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Correo_Electronico"
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
          placeholder="Contraseña"
          secureTextEntry
        />

     

        <TouchableOpacity
          style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5, marginTop: 20, }}
          onPress={registrarUsuario}
        >
          <Text style={{ color: 'white' }}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistroUsuarios;
