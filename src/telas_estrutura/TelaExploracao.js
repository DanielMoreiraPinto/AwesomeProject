import React from 'react'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export function TelaExploracao({navigation}) {
    return (
        <View style={styles.container1}>
            <Button
                onPress={() => navigation.navigate('Arte')}
                title="A arte"
                style={styles.botao}
            >
            </Button>
            <Button
                onPress={() => navigation.navigate('Historia')}
                title="A história"
                style={styles.botao}
            >
            </Button>
            <Button
                onPress={() => navigation.navigate('Profissional')}
                title="O profissional"
                style={styles.botao}
            >
            </Button>
            <Button
                onPress={() => navigation.navigate('Curiosidades')}
                title="Curiosidades"
                style={styles.botao}
            >
            </Button>
        </View>
    );
    
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