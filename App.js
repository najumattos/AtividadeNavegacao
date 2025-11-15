import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CalculoMediaScreen from './screens/CalculoMediaScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import CalculoSalarioScreen from './screens/CalculoSalarioScreen';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}  />
        <Stack.Screen name='CalculoMedia' component={CalculoMediaScreen} />
        <Stack.Screen name='Calculadora' component={CalculadoraScreen} />
        <Stack.Screen name='CalculoSalario' component={CalculoSalarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}