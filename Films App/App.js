import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Página de Login" component={LoginPage}/>
        <Stack.Screen name="Página de Registro" component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
