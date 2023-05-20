import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../Components/Styles';
import Film from '../Components/Film';


export default function FilmPage() {
  
  let [film, setFilmes] = useState([]);

  
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      setFilmes(objeto.data);
    })
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Em cartaz</Text>
      </View> 
  
      <View>
        { film.length > 0 ? film.map(film => 
        <Film key={film.id} filme={film.attributes}/>)
        : <Text style = {styles.carregando}>Carregando</Text>}
      </View>
        <StatusBar style = "auto"/>
    </View>
  );
}
