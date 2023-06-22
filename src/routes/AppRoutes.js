import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmePage from '../Pages/FilmePage/FilmePage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';

const Stack =  createNativeStackNavigator();


export default function AppRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name = "Página de filmes" component={FilmePage}/>
          <Stack.Screen name = "Página de detalhes" component={MovieDetailsPage}/>
        </Stack.Navigator>
    )
}