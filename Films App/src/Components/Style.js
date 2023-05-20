import { StyleSheet, Dimensions} from "react-native";
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FCF7FF",
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },

    containerTitulo: {
      backgroundColor: "#FCF7FF",
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 20
    },

    titulo: {
      color: 'black',
      fontSize: 50,
      fontWeight: 'bold'
    },

    containerFilme: {
      backgroundColor: '#FCF7FF',
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      width: '100%'
    },

    viewImg: {
      width: '100%'
    },

    imagem: {
      width: MAX_WIDTH * 0.4,
      height: MAX_HEIGHT * 0.4,
      marginTop: 5,
      marginBottom: 10,
      borderWidth: 3,
      borderRadius: 8.5,
      maxWidth: MAX_WIDTH * 0.8,
      maxHeight: MAX_HEIGHT * 0.5,
    },
     
    viewDados: {
      padding: 10,
      justifyContent: 'space-evenly'
    },
    
    tituloFilm: {
      color: 'black',
      backgroundColor: '#FCF7FF',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",
      justifyContent: 'space-evenly',
      borderRadius: 20
    },
  
    sinopse: {
      color: 'black',
      margin: 10,
      fontSize: 14,
      fontWeight: 'bold'
    },
     
    carregando: {
      color: 'black',
      fontSize: 20,
      fontStyle:'bold'
    },

    Btn: {
        backgroundColor: "#FCF7FF",
        height: '40px',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    txtBtn: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default styles;
