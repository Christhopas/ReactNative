import { TouchableOpacity, View, TextInput, Image, Text } from "react-native"
import { Link } from "@react-navigation/native"
import styles from "./styles"

export default function ForgetPasswordPage(){
  return(
    <View style={styles.container}>
      <Image/>
      <TextInput placeholder="Email" style={styles.input}/>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={{color: 'white'}}>Recuperar</Text>
      </TouchableOpacity>
      <View style={styles.viewLinks}>
        <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
        <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
      </View>
    </View>
  )
};