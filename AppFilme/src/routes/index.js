import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import {useAuth} from "../contexts/AuthContext";
import { View } from "react-native-web";
import { ActivityIndicator } from "react-native";


export default function Routes(){

    const { logado, loading } = useAuth();

    if(loading){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <ActivityIndicator size={'large'}/>
            </View>
        )

    }

    return(
        logado == true ? <AppRoutes/> : <AuthRoutes/>
    );
}