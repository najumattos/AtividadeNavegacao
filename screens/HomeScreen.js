import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela inicial</Text>           
            <View style={estilos.botao}>
                <Button
                    title='Ir para Calculadora'
                    onPress={() => navigation.navigate('Calculadora')}
                />
            </View>
            <View style={estilos.botao}>
                <Button
                    title='Ir para Calculo de Salário'
                    onPress={() => navigation.navigate('CalculoSalario')}
                />
            </View>
              <View style={estilos.botao}>
                <Button
                    title='Ir para Calculo de Média'
                    onPress={() => navigation.navigate('CalculoMedia')}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginTop: 20,
    }
})