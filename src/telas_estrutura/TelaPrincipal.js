import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

export default ({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground 
          style={styles.headerImage}
          source={require('../../assets/img/home_welcome.jpg')}
        >
          <Text style={styles.headerText}> Bem-vindo! </Text>
          </ImageBackground>
      </View>
      <View style={styles.middle}>
        <TouchableHighlight onPress={() => navigation.navigate('Exploracao')}>
          <View style={styles.mainButton}>
            <Text style={styles.mainButtonText}> Inicie sua aventura pela Computação </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.bottom}>
        <View style={styles.hintContainer}>
          <View style={styles.hintHeader}>
            <Image
              style={styles.hintHeaderImage}
              source={require('../../assets/img/lampada_dica.png')}
            />
            <Text style={styles.hintHeaderTitle}> Dica do dia: </Text>
          </View>
          <View style={styles.hintContent}>
            <Text style={styles.hintContentText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor nisl, dignissim et turpis ac, ultrices tincidunt diam. </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9db"
  },
  
  header: {
    flex: 1,
  },

  headerImage: {
    alignItems: "center",
    height: "100%",
    width: "100%"
  },

  headerText: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#1a1470",
    borderRadius: 40,
    marginTop: 5,
  },

  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  mainButton: {
    height: 50,
    width: "90%",
    borderColor: "#2017a3",
    borderWidth: 3,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },

  mainButtonText: {
    color: "#2017a3",
    fontSize: 16
  },

  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  hintContainer: {
    height: "90%",
    width: "90%",
    borderWidth: 2,
    borderRadius: 10
  },

  hintHeader: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center"
  },

  hintHeaderTitle: {
    fontSize: 26
  },

  hintHeaderImage: {
    height: 50,
    width: 50
  },

  hintContent: {
    flex: 2,
    justifyContent: "center"
  },

  hintContentText: {
    fontSize: 16,
    textAlign: "justify"
  }
})

/*
export function TelaPrincipal({navigation}) {
  return (
    <View style = {styles.container1}>
      <ImageBackground 
        style={styles.image_welcome}
        source={require('../../assets/img/home_welcome.jpg')}
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
          source={require('../../assets/img/lampada_dica.png')}
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
    flex: 1,
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
*/