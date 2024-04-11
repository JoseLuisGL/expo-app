import React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';

function PokemonCard({ name, brief, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{brief}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Ver más detalles" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default PokemonCard;
