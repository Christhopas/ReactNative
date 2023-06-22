import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },

    containerTitulo: {
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
      backgroundColor: '#D5D6D7',
      borderRadius: 20,
      padding: 10,
      marginBottom: 10,
      width: '100%'
    },

    viewImg: {
      width: '100%'
    },

    imagem: {
      width: '100%',
      height: 500,
      borderRadius: 20,
      padding: 100,
      resizeMode: 'cover',
      marginBottom: 10
    },
     
    viewDados: {
      padding: 10,
      justifyContent: 'space-evenly'
    },
    
    tituloFilme: {
      color: '#000',
      backgroundColor: "white",
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      boxShadow: "0px 4px 19px -2px rgba(0,0,0,0.75)",
      justifyContent: 'space-evenly',
      borderRadius: 20
    },
  
    sinopse: {
      color: '#0D0D0D',
      margin: 10,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'justify'
    },
     
    carregando: {
      color: 'black',
      fontSize: 20,
      fontStyle:'bold'
    },

    Btn: {
        backgroundColor: "#0D0D0D",
        height: '40px',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default styles;
