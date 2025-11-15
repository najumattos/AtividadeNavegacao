import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculadoraScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  function Somar() {
    setResultado(Number(num1) + Number(num2));
  }
  function Subtrair() {
    setResultado(Number(num1) - Number(num2));
  }
  function Multiplicar() {
    setResultado(Number(num1) * Number(num2));
  }
  function Dividir() {
    setResultado(Number(num1) / Number(num2));
  }

  return (
    <View>
      <Text>Calculadora</Text>

      <TextInput
        placeholder="Digite o primeiro número"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        placeholder="Digite o segundo número"
        value={num2}
        onChangeText={setNum2}
      />

    
        <Button title="Somar" onPress={() => Somar()} />
     
      <Button title="Subtrair" onPress={() => Subtrair()} />
      <Button title="Multiplicar" onPress={() => Multiplicar()} />
      <Button title="Dividir" onPress={() => Dividir()} />

      <Text>Resltado:{resultado} </Text>
    </View>
  );
};

const estiloCalculadora = StyleSheet.create({
  botao: {
    backgroundColor: '#00000',
  },
});

export default CalculadoraScreen;
