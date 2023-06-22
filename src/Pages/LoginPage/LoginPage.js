import { Text, View, Image, Touchable } from "react-native";
import { Link } from '@react-navigation/native';
import { useContext, useState } from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import AuthContext from "../../contexts/AuthContext";
import { TouchableOpacity } from "react-native-web";


export default function LoginPage(){

    const {signIn} = useContext(AuthContext);

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style = {styles.container}>
            <Image style = {styles.img} source = {{uri: 'https://cdn-icons-png.flaticon.com/512/1752/1752782.png'}}/>
            <Text style = {styles.txt}>Bem-vindo!</Text>
            <TextInput style = {styles.input}
                value = {usuario}
                onChangeText={text=>setUsuario(text)}
                placeholder="e-mail"/>
            <TextInput style = {styles.input}
                value = {senha}
                onChangeText={text=>setSenha(text)}
                placeholder="senha"
                secureTextEntry = 'true'/>


            <TouchableOpacity style = {styles.LoginBox} onPress={() => signIn ()}>
                <Text>Login</Text>

            </TouchableOpacity>

            <View style = {styles.LoginBox}>
                <Link to= {{screen: "Página de filmes"}} style = {styles.link} >Entrar</Link>
                <Link to= {{screen: "Página de registro"}} style = {styles.link}>Registre-se!</Link>
            </View>
           
        </View>
    )
}
