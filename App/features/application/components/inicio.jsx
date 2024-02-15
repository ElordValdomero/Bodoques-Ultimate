// InicioSesion.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const InicioSesion = () => {
  const navigation = useNavigation();

  const verificarUsuario = () => {
    // Lógica de verificación de usuario
    console.log('Verificando usuario...');
  };

  const irARegistroUsuarios = () => {
    navigation.navigate('Registrarse'); // Nombre correcto de la pantalla
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>L O G I N</Text>
      
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Nombre del usuario"
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Contraseña"
        secureTextEntry
      />

      <TouchableOpacity
        style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5 }}
        onPress={verificarUsuario}
      >
        <Text style={{ color: 'white' }}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>
        ¿No estás registrado? Házlo <Text style={{ color: 'blue' }} onPress={irARegistroUsuarios}>a q u í</Text> 
      </Text>
    </View>
  );
};

export default InicioSesion;
