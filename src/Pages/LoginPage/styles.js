import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCF7FF",
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height: 200,
        width: 200,
        borderRadius: 20,
    },

    txt: {
        color:'black',
        fontSize: 40,
        marginBottom: 40,
        marginTop: 15
    },

    LoginBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    link: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        padding: 10,
        elevation: 3,
        width: 160,
        height: 40,
        borderRadius: '5px',
        marginBottom: '10px',
        marginTop: '10px',

        backgroundColor: 'black',
        color: 'white',

    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        width: 250,

        borderColor: 'black',
        color: 'black',
      }
});

export default styles;
