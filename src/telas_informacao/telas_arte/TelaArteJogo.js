import React from 'react'
import {
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
} from 'react-native';

export function TelaArteJogo() {
  return (
    <View>
      <Text style={styles.Text1}> Perguuuuuuuuuuuuuuunta? </Text>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 1"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 2"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 3"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 4"
      ></Button>

      <Text style={styles.Text1}> Perguuuuuuuuuuuuuuunta? </Text>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 1"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 2"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 3"
      ></Button>
      <Button
        onPress={() => Alert.alert("Acertou?")}
        title="Opção 4"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Text1: {
    fontSize: 20
  }
})