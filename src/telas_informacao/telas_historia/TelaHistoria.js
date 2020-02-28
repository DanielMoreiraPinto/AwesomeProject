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
          title: "O computador nas eras",
          data: ["A capacidade dos seres humanos em calcular quantidades dos mais variados modos foi um dos fatores que possibilitaram o desenvolvimento da matemática e da lógica. Nos primórdios da matemática e da álgebra, utilizavam-se os dedos das mãos para efetuar cálculos. A mais antiga ferramenta conhecida para uso em computação foi o ábaco, e foi inventado na Babilônia por volta de 2400 a.C. O seu estilo original de uso, era desenhar linhas na areia com rochas. Ábacos, de um design mais moderno, ainda são usados como ferramentas de cálculo. O ábaco dos romanos consistia de bolinhas de mármore que deslizavam numa placa de bronze cheia de sulcos. Também surgiram alguns termos matemáticos: em latim 'calx' significa mármore, assim 'calculos' era uma bolinha do ábaco, e fazer cálculos aritméticos era 'calculare'. No século V a.C., na antiga Índia, o gramático Pānini formulou a gramática de Sânscrito usando 3959 regras conhecidas como Ashtadhyāyi, de forma bastante sistemática e técnica. Pānini usou meta-regras, transformações e recursividade com tamanha sofisticação que sua gramática possuía o poder computacional teórico tal qual a máquina de Turing. Entre 200 a.C. e 400, os indianos também inventaram o logaritmo, e partir do século XIII tabelas logarítmicas eram produzidas por matemáticos islâmicos. Quando John Napier descobriu os logaritmos para uso computacional no século XVI, seguiu-se um período de considerável progresso na construção de ferramentas de cálculo. John Napier (1550-1617), escocês inventor dos logaritmos, também inventou os ossos de Napier, que eram tabelas de multiplicação gravadas em bastão, o que evitava a memorização da tabuada. A primeira máquina de verdade foi construída por Wilhelm Schickard (1592-1635), sendo capaz de somar, subtrair, multiplicar e dividir. Essa máquina foi perdida durante a guerra dos trinta anos, sendo que recentemente foi encontrada alguma documentação sobre ela. Durante muitos anos nada se soube sobre essa máquina, por isso, atribuía-se a Blaise Pascal (1623-1662) a construção da primeira máquina calculadora, que fazia apenas somas e subtrações."]
        },
        {
          title: "Os grandes nomes",
          data: ["Etiam imperdiet finibus erat non dignissim. Aliquam cursus pharetra purus, eu ornare felis condimentum vitae. Praesent sed est sit amet felis ullamcorper rutrum quis a augue. Maecenas bibendum ante cursus, lacinia ante eu, tincidunt velit. Vestibulum tortor purus, cursus sit amet suscipit scelerisque, porta vel ipsum. Donec mauris nisi, tempor a varius ac, consequat quis odio. Praesent luctus justo luctus dictum mollis. Morbi tempor eget est non ullamcorper."]
        },
        {
          title: "A contemporaneidade",
          data: ["Ada Lovelace é considerada a primeira programadora da história. Grace Hopper foi pioneira na criação de ferramentas para a compilação de programas. Alan Turing formalizou diversos conceitos computacionais e vislumbrou o potencial de um computador em executar qualquer conjunto de passos lógicos que conseguisse interpretar. Ele foi além e propôs que, um dia, as máquinas evoluiriam a ponto de se tornarem inteligentes. Linus Torvalds é parte essencial das distribuições de SOs e conhecido por rodar em grande parte dos servidores, data centers e supercomputadores do planeta."]
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