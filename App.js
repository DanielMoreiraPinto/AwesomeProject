import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style = {styles.container}>
        <Image
          style={styles.image_welcome}
          source={require('./img/home_welcome.jpg')}
        />
        <Text style={styles.text_welcome}> Bem-vindo! </Text>
        
        <Button 
          onPress={() => {
            alert("Tela de informação");
          }}
          style={styles.button_welcome}
          title="Inicie sua aventura pela computação">
        </Button>

        <Text style={styles.header}> Dica do dia: [ícone de lâmpada] </Text>
        <Text style={styles.text}> [Dica com bela imagem fosca atrás] </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text_welcome: {
    color: "#000000",
    fontSize: 50,
    fontWeight: "bold"
  },

  image_welcome: {
    height: 200,
    width: 400
  },

  button_welcome: {
    color: "#0a0f52"
  },

  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "stretch"
  },
  
  text: {
    color : "#000000",
    fontSize: 20
  },

  header: {
    color : "#000000",
    fontSize: 25
  }
});

export default App;
