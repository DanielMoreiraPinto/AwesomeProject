import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export class TelaExploracao extends Component {
    render() {
        return (
            <View style={styles.container1}>
    <Button
        onPress={() => {
        alert("Tela de arte");
        }}
        title="A arte"
        style={styles.botao}
    >
    </Button>
    <Button
        onPress={() => {
        alert("Tela de história");
        }}
        title="A história"
        style={styles.botao}
    >
    </Button>
    <Button
        onPress={() => {
        alert("Tela do profissional");
        }}
        title="O profissional"
        style={styles.botao}
    >
    </Button>
    <Button
        onPress={() => {
        alert("Tela das curiosidades");
        }}
        title="Curiosidades"
        style={styles.botao}
    >
    </Button>
</View>
        );
    }
}

const styles = StyleSheet.create({
    botao: {
        color: "#0a0f52"
        },
        
        container1: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
        }
})