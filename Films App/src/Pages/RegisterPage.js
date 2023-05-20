import { StyleSheet, Text, View } from "react-native";
import Register from "../Components/Register";

export default function RegisterPage(){
    return (
        <View style = {styles.container}>
            <Register/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCF7FF",
        alignItems: 'center'
    },
})
