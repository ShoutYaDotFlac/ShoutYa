import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Icon } from 'native-base';

import MateIcon from '../components/MateIcon.js';

var { width, height } = Dimensions.get('window');
var margin = 20;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        margin: margin
    },
    h1: {
        fontSize: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
    },
});

export default class Mates extends React.Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.h1}>Mates</Text>
                </View>
                <View style={styles.container}>
                    <MateIcon />
                    <MateIcon />
                    <MateIcon />
                    <MateIcon />
                    <MateIcon />
                    <MateIcon />
                </View>
            </View>
        );
    }
}