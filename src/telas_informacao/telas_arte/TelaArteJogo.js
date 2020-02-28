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
      question: "Um algoritmo é, conceitualmente, um conjunto de quê?",
      option1: "Regras",
      option2: "Processos",
      option3: "Códigos",
      option4: "Palavras em inglês",
    },

    {
      id: "2",
      question: "A Computação é a busca de quê?",
      option1: "Da solução de cálculos matemáticos",
      option2: "Da criação da inteligência artificial",
      option3: "De uma solução para um problema",
      option4: "Da imortalidade",
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