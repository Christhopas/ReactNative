import { Text, StyleSheet, View } from "react-native";

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Text>Pagina de Registro</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})