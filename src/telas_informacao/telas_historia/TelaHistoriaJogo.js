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
      question: "Qual a mais antiga ferramenta utilizada em coputação?",
      option1: "A calculadora",
      option2: "A Máquina Analítica",
      option3: "O ábaco",
      option4: "O computador do meu tio",
    },

    {
      id: "2",
      question: "Em que país os logaritmos foram inventados?",
      option1: "Índia",
      option2: "Itália",
      option3: "China",
      option4: "França",
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