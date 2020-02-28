import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
        {
          title: "Definição",
          data: ["A computação é a busca de uma solução para um problema, a partir de entradas de dados (inputs), e pelo uso de algoritmos. É com isto que lida a teoria da computação, subcampo da ciência da computação e da matemática."]
        },
        {
          title: "As áreas a explorar",
          data: ["No curso de bacharelado em Ciências da Computação os alunos são levados a aprender mais sobre as necessidades de usuários e futuros clientes, para que possam elaborar, da melhor forma, programas para computadores ou outros dispositivos. Além do trabalho com software e aplicativos, nessa graduação são formados profissionais aptos a dar um bom gerenciamento a bancos de dados, sistemas para compra e venda e prestação de serviços aos usuários, como a assistência a eles.O curso de bacharelado em Engenharia da Computação é voltado para o estudo profundo dos sistemas computacionais. Nele o aluno aprende como construir da melhor maneira as peças, os equipamentos, sistemas de operação, acessórios, teclado, CPU, mouse… Para poder projetar computadores. Além dessa função, no mercado de trabalho, o profissional formado pode atuar com a projeção para outros produtos, como os ligados a periféricos de telefonia e robótica, ou mesmo no suporte a rede de computadores."]
        },
        {
          title: "O algoritmo",
          data: ["Um algoritmo é uma sequência finita e não ambígua de instruções para solucionar um problema. Mais especificamente, em matemática, constitui o conjunto de processos (e símbolos que os representam) para efectuar um cálculo. Algoritmos podem ser implementados por programas de computadores."]
        }
        ]}
        renderSectionHeader={({section}) => 
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{section.title}</Text>
          </View>
        }
        renderItem={({item}) => 
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View> 
        }
        keyExtractor={(item, index) => index}
      />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#2017a3",
    marginHorizontal: 5
  },

  titleText: {
    fontSize: 24
  },

  itemContainer: {
    marginBottom: 10,
    marginHorizontal: 5
  },

  itemText: {
    fontSize: 16,
    textAlign: "justify"
  }
})