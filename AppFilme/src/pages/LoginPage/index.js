import { TouchableOpacity, View, TextInput, Image, Text } from "react-native"
import { Link } from "@react-navigation/native"
import styles from "./styles"
import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"

export default function LoginPage(){

  const {signIn} = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <Image style = {styles.img} source = {{uri: 'https://www.freenews.fr/wp-content/uploads/2014/12/2000px-The_Pirate_Bay_logo_bw.svg_.png'}}/>
      <Text style = {styles.txt}>Bem-vindo!</Text>
      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Senha"style={styles.input}/>
      <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
      <View style={styles.viewLinks}>
        <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
        <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
      </View>
    </View>
  )
};