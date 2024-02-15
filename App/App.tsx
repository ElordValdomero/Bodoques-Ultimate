import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { supabase } from './lib/supabase';

export default function AddNote() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Recuperar notas al cargar la pantalla
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('note')
        .select('note, date')
        .order('date', { ascending: false });

      if (!error) {
        setNotes(data);
      } else {
        Alert.alert('Error', error.message);
      }
    } catch (error) {
      console.error('Error al obtener las notas:', error);
    }
  };

  const saveNote = async () => {
    if (!note) {
      return;
    }

    try {
      const { error } = await supabase
        .from('note')
        .insert([{ 
          note: note,
          date: new Date(),
        }])
        .select();

      if (!error) {
        setNote('');
        // Actualizar la lista después de guardar una nueva nota
        fetchNotes();
      } else {
        Alert.alert('Error', error.message);
      }
    } catch (error) {
      console.error('Error al guardar la nota:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Nota</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Ingresar la nueva nota"
          numberOfLines={4}
          value={note}
          onChangeText={setNote}
        />

        <Button title="Registrar Nota" disabled={!note} onPress={saveNote} />

        <Text style={styles.title}>Notas Guardadas</Text>
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.not}>{item.note}</Text>
              <Text style={styles.not}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 66,
    padding: 64,
    paddingTop: 120,
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 64,
    marginBottom: 16,
  },

  form: {
    width: '80%', // Ajuste el ancho según sus necesidades
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 50,
  },

  input: {
    width: '100%', // Ajuste el ancho del TextInput según sus necesidades
    height: 40,
    borderColor: 'yellow',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },

  note: {
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 0,
    marginLeft: 20,
  },

  not: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    marginTop: 0,
    marginLeft: 20,
  },

  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 25

  },
  
});
