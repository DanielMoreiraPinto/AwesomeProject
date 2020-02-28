import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Recomendacao from '../../components/Recomendacao'

export default () => {
  var recomendacoes = [
    {
      id: "1",
      title: "Primeiro link",
      link: "link",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nisl, dignissim et turpis ac, ultrices tincidunt diam."
    },
    {
      id: "2",
      title: "Segundo link",
      link: "link",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nisl, dignissim et turpis ac, ultrices tincidunt diam."
    },
    {
      id: "3",
      title: "Terceiro link",
      link: "link",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nisl, dignissim et turpis ac, ultrices tincidunt diam."
    },
    {
      id: "4",
      title: "Quarto link",
      link: "link",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nisl, dignissim et turpis ac, ultrices tincidunt diam."
    },
  ]

  return(
    <View style={styles.container}>
      <FlatList
        data = {recomendacoes}
        keyExtractor={recomendacao => recomendacao.id}
        renderItem={({item}) => {
          return(
            <Recomendacao
              title={item.title}
              link={item.link}
              text={item.text}
            />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
})