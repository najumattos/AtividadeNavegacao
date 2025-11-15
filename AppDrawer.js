import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CalculadoraScreen from './screens/CalculadoraScreen';
import CalculoSalarioScreen from './screens/CalculoSalarioScreen';
import CalculoMediaScreen from './screens/CalculoMediaScreen';

const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="CalculoSalario"
          component={CalculoSalarioScreen}
          options={{
            title: 'Calculo Salario',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="airplanemode-active" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculadora"
          component={CalculadoraScreen} 
          options={{
            title: 'Calculadora',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="assistant" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="CalculoMedia"
          component={CalculoMediaScreen} 
          options={{
            title: 'Calculo Media',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="propane-tank" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}