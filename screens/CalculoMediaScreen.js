import {useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';

const CalculoMediaScreen = () => {

const [media, setMedia] = useState('')
const [notas, setNotas] = useState(['', '', '', '', '']);
const [classificacao, setClassificacao] = useState('');

  const handleNotaChange = (text, index) => {

    const novasNotas = [...notas];

    novasNotas[index] = text;

    setNotas(novasNotas);
  };


function CalcularMedia(){
  const somaNotas =notas.reduce((acc, nota) => acc + (Number(nota) || 0), 0);
  const mediaAtualizada = (Number(somaNotas) / notas.length)

   
     if (mediaAtualizada >= 6) {
       setClassificacao('Aprovado')
    } else {
      setClassificacao('Reprovado')
    }

    setMedia(mediaAtualizada)
    setClassificacao(classificacaoAluno);
}


return(
   <View>
      <Text>Digite 5 notas:</Text>
      
      {notas.map((nota, index) => (
        <TextInput
          onChangeText={(text) => handleNotaChange(text, index)}
          value={nota}
          placeholder={`Nota ${index + 1}`}
        />
      ))}

       <Button title="Calcular" onPress={() => CalcularMedia() } />
       <Text>Média: {media}</Text>  
       <Text>Situacao: {classificacao}</Text>    
  </View>
)}

export default CalculoMediaScreen;