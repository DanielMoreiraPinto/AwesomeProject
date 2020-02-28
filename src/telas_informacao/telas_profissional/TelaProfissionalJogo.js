import React from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Questao from '../../components/Questao'

export default () => {
  var questoes = [
    {
      id: "1",
      question: "Qual dessas características é a mais importante num programador?",
      option1: "Audácia",
      option2: "Extrovertismo",
      option3: "Oratória",
      option4: "Criatividade",
    },

    {
      id: "2",
      question: "Qual desses campos é bem recomendado para o programador?",
      option1: "Datilografia",
      option2: "Álgebra",
      option3: "Atalhos de teclado",
      option4: "Relações públicas",
    },

    {
      id: "3",
      question: "Mauris pellentesque erat nec ex cursus auctor non ac odio. Suspendisse eu lorem nec ipsum maximus gravida eu sed urna?",
      option1: "Nulla gravida suscipit sollicitudin.",
      option2: "Nulla gravida suscipit sollicitudin.",
      option3: "Nulla gravida suscipit sollicitudin.",
      option4: "Nulla gravida suscipit sollicitudin.",
    },

    {
      id: "4",
      question: "Mauris pellentesque erat nec ex cursus auctor non ac odio. Suspendisse eu lorem nec ipsum maximus gravida eu sed urna?",
      option1: "Nulla gravida suscipit sollicitudin.",
      option2: "Nulla gravida suscipit sollicitudin.",
      option3: "Nulla gravida suscipit sollicitudin.",
      option4: "Nulla gravida suscipit sollicitudin.",
    },
  ]
  
  return (
    <View style={styles.container}>
      <FlatList
        data = {questoes}
        keyExtractor={questao => questao.id}
        renderItem={({item}) => {
          return(
            <Questao
              question={item.question}
              option1={item.option1}
              option2={item.option2}
              option3={item.option3}
              option4={item.option4}
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
    backgroundColor: "#ffffff",
    alignItems: "center"
  }
})