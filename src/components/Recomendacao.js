import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default ({title, link, text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {title} </Text>
      </View>
      <View>
        <Text style={styles.link}> {link} </Text>
      </View>
      <View>
        <Text style={styles.text}> {text} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#2017a3",
    padding: 3
  },

  titleContainer: {
    alignItems: "center"
  },

  title: {
    fontSize: 20
  },

  link: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#1f1fcc"
  },

  text: {
    fontSize: 16,
    textAlign: "justify"
  }
})