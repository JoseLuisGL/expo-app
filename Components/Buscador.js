import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Buscador({title, style}){
    const [number, onChangeNumber] = React.useState('');

    return(
        <TextInput
        style={style}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={title}
        keyboardType="numeric"
      />
      
    );
}

export default Buscador;