
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from '../Pages/LoginPage/LoginPage';

const Stack =  createNativeStackNavigator();

export default function AuthRoutes(){
    return (
        <Stack.Navigator>

            <Stack.Screen name = "Página de login" component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name = "Página de registro" component={RegisterPage}/>

        </Stack.Navigator>
    );
}