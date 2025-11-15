import {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculoSalarioScreen=() =>{

const [salarioHora, setSalarioHora] = useState('')
const [qtdHora, setQtdHora] = useState('')
const [horaExtra, setHoraExtra] = useState('')
const [salarioFinal, setsalarioFinal] = useState('')
const [acressimo, setAcressimo] = useState('')

function CalcularSalario(){
  const acressimoPorcent = 0.5  
  if(qtdHora > 160){
    setHoraExtra(Number(qtdHora) - 160)
    }

    setAcressimo((Number(salarioHora) * Number(horaExtra)) * Number(acressimoPorcent))
    setsalarioFinal((Number(qtdHora) * Number(salarioHora)) + Number(acressimo))
}
 return(
   <View>
      <Text>Calcular Salario</Text>

       <TextInput
        placeholder="Digite o salario/hora"
        value={salarioHora}
        onChangeText={setSalarioHora}
      />
       <TextInput
        placeholder="Digite a quantidade de horas"
        value={qtdHora}
        onChangeText={setQtdHora}
      />

       <Button title="Calcular" onPress={() => CalcularSalario() } />
      <Text>Quantidade de Horas Extra: {horaExtra}.</Text>    
      <Text>Acressimo: {acressimo}.</Text>    
      <Text>Salário Final: {salarioFinal}.</Text>    
  </View>
 )
}

export default CalculoSalarioScreen