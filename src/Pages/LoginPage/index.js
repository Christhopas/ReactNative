import { TouchableOpacity, View, TextInput, Image, Text } from "react-native"
import { Link } from "@react-navigation/native"
import styles from "./styles"

export default function LoginPage(){
  return(
    <View style={styles.container}>
      <Image/>
      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Senha"style={styles.input}/>
      <TouchableOpacity style={styles.btnLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <View style={styles.viewLinks}>
        <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
        <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
      </View>
    </View>
  )
};