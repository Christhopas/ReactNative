import { Text, StyleSheet, View } from "react-native";
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return(
        <View style={styles.container}>


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
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '10px',
        boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",

    }
})

