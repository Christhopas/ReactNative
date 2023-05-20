import { useState } from "react"
import { TextInput, StyleSheet, View } from "react-native"


export default function Register(){
    
    const [nome, setNome] = useState("")
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    return(
      <View>
        <TextInput style = {styles.input}
            value = {nome}
            onChangeText={text=>setNome(text)}
            placeholder="Nome"/>
        <TextInput style = {styles.input}
            value = {usuario}
            onChangeText={text=>setUsuario(text)}
            placeholder="e-mail"/>
        <TextInput style = {styles.input}
            value = {senha}
            onChangeText={text=>setSenha(text)}
            placeholder="senha"
            secureTextEntry = 'true'/>
      </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    color: 'black',
    width: 250
  }
})
