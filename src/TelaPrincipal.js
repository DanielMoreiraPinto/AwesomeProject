import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

export function TelaPrincipal({navigation}) {
  return (
    <View style = {styles.container1}>
      <ImageBackground 
        style={styles.image_welcome}
        source={require('../img/home_welcome.jpg')}
      >
        <Text style={styles.text_welcome}> Bem-vindo! </Text>
      </ImageBackground>

      <Button 
        onPress={() => navigation.navigate('Exploracao')}
        style={styles.button_welcome}
        title="Inicie sua aventura pela computação">
      </Button>

      <View style={styles.container2}>
        <View style={styles.container3}>
        <Text style={styles.header}> Dica do dia: </Text>
        <Image
          style={styles.image_dica}
          source={require('../img/lampada_dica.png')}
        />
        </View>
        <Text style={styles.text}> [Dica com bela imagem fosca atrás] </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text_welcome: {
    color: "#FFFFFF",
    fontSize: 50,
    fontWeight: "bold"
  },

  image_welcome: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    width: 360
  },

  image_dica: {
    height: 20,
    width: 20
  },

  button_welcome: {
    color: "#0a0f52"
  },

  container1: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between"
  },

  container2: {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 2,
    margin: 5,
    height: 200,
    borderRadius: 10
  },

  container3: {
    /*flex: 1,*/
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
  text: {
    color : "#000000",
    fontSize: 16
  },

  header: {
    textAlign: "center",
    color : "#000000",
    fontSize: 20
  }
});