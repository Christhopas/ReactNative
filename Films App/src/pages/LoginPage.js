import { Text, StyleSheet, View } from "react-native";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return(
        <View style={styles.container}>
            <Text>Pagina de Login</Text>
            <Link style={styles.link} to={{screen: "Página de Registro"}}>Registre-se</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    link: {
        width: '80%',
        height: '40px',
        backgroundColor: 'orange',
        textAlign: 'center',
    }
})

