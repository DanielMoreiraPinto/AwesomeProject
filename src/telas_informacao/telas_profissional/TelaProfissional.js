import React,{Component} from 'react'
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
          title: "Traçando um perfil",
          data: ["É importante que este profissional tenha raciocínio lógico, pois isto facilitará na hora do desenvolvimento de um sistema. Além disso, o programador deve gostar de aprender, ter bom nível de concentração, ser autodidata, curioso, disciplinado, paciente e persistente, além de sempre querer resolver um problema."]
        },
        {
          title: "Quebrando mitos",
          data: ["Aprender a programar é coisa de nerd? Esse é um dos mais famosos e absolutos MITOS da área da programação. Isso porque programar exige, como qualquer outro tema, aprendizado e dedicação. Mas não é preciso ser “um gênio” para exercer a profissão. Para programar, precisa entender de matemática? Nós até já falamos sobre isso aqui no blog. Um MITO também muito comum. Algumas pessoas confundem programação com matemática, mas as duas coisas são bem diferentes. O programador, na maior parte das vezes, utiliza códigos e o raciocínio lógico. Fazer isso não exige um grande conhecimento de vários campos da matemática. É importante ter algumas noções de álgebra, mas isso numa área muito básica do conhecimento."]
        },
        {
          title: "O mercado",
          data: ["Uma boa notícia para quem pretende entrar nessa área: O mercado de trabalho para os programadores têm sido muito promissor e é crescente nos setores privado e público. Vale ressaltar que o sucesso na carreira depende do nível de especialização e da área de dedicação do profissional. Empresas públicas abrem concursos, que são muito procurados, mas as vagas costumam ser para cadastro e não para empregar efetivamente. Nesse caso o mercado está estável sem demissões e contratações."]
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