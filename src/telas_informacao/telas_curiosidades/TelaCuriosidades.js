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
          title: "Empresas de tecnologia costumam testar produtos na Nova Zelândia",
          data: ["Muitas companhias de software, redes sociais e desenvolvedores de aplicativos recorrem à Nova Zelândia para testar e aperfeiçoar seus produtos e serviços. O motivo? O país da Oceania é considerado isolado o suficiente para evitar vazamentos, com o benefício de que a população fala inglês, tem gostos e poder econômico semelhantes aos ocidentais."]
        },
        {
          title: "O celular no bolso e a síndrome da vibração fantasma",
          data: ["O fenômeno em que você acha que seu smartphone está vibrando, mas ele não está, tem nome: síndrome da vibração fantasma. Pesquisadores explicam que a causa são “hábitos corporais aprendidos”. As pessoas passam a sentir o celular deixado no bolso como parte do próprio corpo, da mesma forma que acontece com quem usa óculos, por exemplo. Assim, às vezes, percebem sensações como o movimento da roupa ou espasmos dos músculos como se fossem a vibração do telefone."]
        },
        {
          title: "O e-mail foi criado antes da internet",
          data: ["O primeiro sistema de e-mail era um programa chamado Mailbox e ficava em computadores do Instituto de Tecnologia de Massachusetts (MIT), já em 1965. Um usuário podia deixar uma mensagem para outro, que seria visualizada na próxima vez que o segundo fizesse login na mesma máquina."]
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
    fontSize: 24,
    textAlign: "justify"
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