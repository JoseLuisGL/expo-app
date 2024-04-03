import React from 'react';
import {Button, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Encabezado from "./Components/Encabezado.js";
import Buscador from './Components/Buscador.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Encabezado title={"Centro De Busquedas Global Intermitentes"} style={styles.head} />
      <Buscador title={"Ingresa una busqueda"} style={styles.input} />
      <Button
        title="Buscar"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 800,
    margin: 15,
    borderWidth: 2,
    fontSize: 24,
    padding: 20,
  },
  head: {
    fontSize: 32, 
    padding: 20,
  },
});
