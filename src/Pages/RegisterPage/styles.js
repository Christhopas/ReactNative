import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1,
        alignItems: 'center'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: 'black',
        color: 'black',
        width: 250
      },

      Btn: {
        backgroundColor: "#0D0D0D",
        color: 'white',

        width: 160,
        height: 40,
        padding: 10,
        borderRadius: '5px',
        marginTop: 70,

        textAlign: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
    }
    
});

export default styles;
