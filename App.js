import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

const Stack =  createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    );
}
