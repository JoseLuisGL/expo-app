import React from 'react';
import { TextInput } from 'react-native';

function Buscador({ title, style }) {
    const [inputText, setInputText] = React.useState('');

    const handleChangeText = (text) => {
        setInputText(text);
    };

    return (
        <TextInput
            style={style}
            onChangeText={handleChangeText}
            value={inputText}
            placeholder={title}
        />
    );
}

export default Buscador;
