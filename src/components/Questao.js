import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';

export default ({question, option1, option2, option3, option4}) => {
  return (
    <View style={styles.exercise}>
      <Text style={styles.question}> {question} </Text>
        <TouchableWithoutFeedback onPress={() => Alert.alert("Acertou?")}>
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}> {option1} </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => Alert.alert("Acertou?")}>
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}> {option2} </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => Alert.alert("Acertou?")}>
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}> {option3} </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => Alert.alert("Acertou?")}>
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}> {option4} </Text>
          </View>
        </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  exercise: {
    width: "98%",
    backgroundColor: "#fdfdfd",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#2017a3",
    borderRadius: 15,
    padding: 2
  },

  question: {
    fontSize: 18,
    textAlign: "justify"
  },

  answerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginVertical: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  answerText: {
    fontSize: 16
  }
})