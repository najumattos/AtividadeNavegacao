import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons'
import HomeScreen from "./screens/HomeScreen";
import CalculadoraScreen from './screens/CalculadoraScreen';
import CalculoSalarioScreen from './screens/CalculoSalarioScreen';
import CalculoMediaScreen from './screens/CalculoMediaScreen';

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>      
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' 
        component={HomeScreen} 
        options={{
          title: 'Início',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='home' color={color} size={size}/>
          )
        }}/>      
        <Tab.Screen name='Calculadora' 
        component={CalculadoraScreen} 
        options={{
          title: 'Calculadora',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='assistant' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name='CalculoSalario'
        component={CalculoSalarioScreen}
        options={{
          title: 'Cálculo Sálario',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='propane-tank' color={color} size={size}/>
          )
        }}/>
         <Tab.Screen name='CalculoMedia'
        component={CalculoMediaScreen}
        options={{
          title: 'Cálculo Média',
          tabBarIcon:({color, size}) => (
            <MaterialIcons name='propane-tank' color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}