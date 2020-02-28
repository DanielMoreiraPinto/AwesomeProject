import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../../assets/img/imagem_fundo_sobre.jpg')}
      imageStyle={{opacity:.2}}>
        <Text style={styles.texto}> Feito por Daniel Moreira Pinto </Text>
        <Text style={styles.texto}> Dedicado ao PETComp UFMA </Text>
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
    fontSize: 20,
  }
})
