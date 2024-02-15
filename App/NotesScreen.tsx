import 'react-native-url-polyfill/auto';
import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Auth from './components/Auth';
import Account from './components/Account';
import { View, Text } from 'react-native';
import { Session } from '@supabase/supabase-js';

export default function App() {
  // State para notas
  const [note, setNote] = useState([]);

  // Al cargar la pantalla, obtener la lista de notas de la tabla note
  async function getNote() {
    let { data: note, error } = await supabase
      .from('note')
      .select('*');

    // Pasar las notas
    console.log(note);
    setNote(note as []); // Indicar que note es un arreglo
  }

  useEffect(() => {
    getNote();
  }, []);

  return (
    <View>
      <Text>Notas</Text>

      {note.map((item: any) => (
        <Text key={item.id}>
          {item.text}
        </Text>
      ))}
    </View>
  );
}
