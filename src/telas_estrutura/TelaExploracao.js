import React from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

export default ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableHighlight onPress={() => navigation.navigate('Arte')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>A Arte</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Historia')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>A História</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Profissional')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>O Profissional</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('Curiosidades')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Curiosidades</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d9d9db",
        alignItems:"center",
        justifyContent: "space-around"
    },

    button: {
        height: 40,
        width: 200,
        backgroundColor: "#2017a3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    buttonText: {
        fontSize: 16,
        color: "#ffffff"
    }
})