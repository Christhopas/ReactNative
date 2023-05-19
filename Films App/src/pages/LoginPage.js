import { Text, StyleSheet, View } from "react-native";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return(
        <View style={styles.container}>
            <Text>Pagina de Login</Text>


            <Link style={styles.button} to={{screen: "Página de Registro"}}>Registre-se</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCF7FF'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'red',
        borderRadius: '10px',
    }
})


