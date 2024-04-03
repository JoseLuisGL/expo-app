import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Encabezado({title, style}){
    return(
        <Text style={[styles.text, style]}>{title}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        padding: 20,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default Encabezado;
