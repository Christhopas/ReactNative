import { Text, StyleSheet, View } from "react-native";
import { Link } from '@react-navigation/native';
import Login from "../Components/Login";

export default function LoginPage(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.txt}>Faça seu Login</Text>
            <Login/>
            <View style = {styles.LoginBox}>
                <Link to= {{screen: "Página de Filme"}} style = {styles.link}>Entrar</Link>
                <Link to= {{screen: "Página de Registro"}} style = {styles.link}>Registre-se</Link>
            </View>
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

    link: {
       alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
        marginBottom: '10px',
        marginTop: '10px'
    },

    txt: {
        color:'Black',
        fontSize: 40,
        marginBottom: 40,
        fontFamily: 'Poppins, sans-serif'
    },

    Login: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})
