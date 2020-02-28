import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../../assets/img/imagem_fundo_sobre.jpg')}
      imageStyle={{opacity:.2}}>
        <Text style={styles.texto}> Feito por Daniel Moreira Pinto </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  background: {
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  },

  texto: {
    fontSize: 16,
  }
})
