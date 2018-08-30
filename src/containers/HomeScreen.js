import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'native-base';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    h1: {
        fontSize: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        textAlign: 'center'
    },
    h2: {
        fontSize: 28,
        textAlign: 'center',
        margin: 20
    }
});


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Home Screen</Text>
                <Text style={styles.h2}>Welcome to ShoutYa! The best place to show your friends who's turn it is to shout this time</Text>
            </View>
        );
    }
}