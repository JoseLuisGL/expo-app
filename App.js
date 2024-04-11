import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Encabezado from './Components/Encabezado';
import Buscador from './Components/Buscador';
import PokemonCard from './Components/PokemonCard';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const URL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error("Error al obtener lista de Pokemons:", error);
      });
  }, []);

  const handleSearch = () => {
    // Busqueda con la API utilizando el texto ingresado en el buscador ----
    // utilizar el estado searchText para enviar la consulta a la API ----
    // Actualizar pokemonList con los resultados de la búsqueda PENDIENTE
  };

  return (
    <View style={styles.container}>
      <Encabezado title={"Poke API"} style={styles.head} />
      <Buscador
        title={"Ingresa una búsqueda"}
        style={styles.input}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <Button title="Buscar" onPress={handleSearch} style={styles.button} />
      <ScrollView style={styles.cardContainer}>
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  input: {
    height: 80,
    width: 350,
    margin: 15,
    borderWidth: 2,
    fontSize: 24,
    padding: 20,
  },
  head: {
    fontSize: 32,
    padding: 20,
  },
  button: {
    height: 50,
    width: 100,
    fontSize: "black",
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    padding: 50,
    paddingVertical: 30,
  },
});
