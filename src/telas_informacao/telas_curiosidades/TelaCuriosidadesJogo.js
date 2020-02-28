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
      question: "Adivinha que animal está na logo do navegador Firefox.",
      option1: "Um panda vermelho",
      option2: "Uma raposa",
      option3: "Um furão",
      option4: "Um lobo-guará",
    },

    {
      id: "2",
      question: "Adivinha quanto tempo demorou para a primeira câmera de celular tirar uma foto.",
      option1: "30 minutos",
      option2: "1 hora",
      option3: "15 minutos",
      option4: "8 horas",
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