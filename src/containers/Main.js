import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';

import HomeScreen from './HomeScreen.js';
import Mates from './Mates.js';
import Friend from './Friend.js';

var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'blue',
        width: width,
        height: height + 50,
        borderRadius: 10,
    },
    blue: {
        backgroundColor: 'lightblue'
    },
    yellow: {
        backgroundColor: 'lightyellow'
    }
});

export default class Main extends React.Component {
    render() {
        return (
            <Container style={{ alignContent: 'center' }}>
                <ScrollView
                    ref={(scrollView) => { this.scrollView = scrollView; }}
                    pagingEnabled={true}
                    horizontal={true}
                    snapToInterval={width}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                    <View style={[styles.view, styles.blue]}><HomeScreen /></View>
                    <View style={[styles.view, styles.yellow]}><Friend /></View>
                    <View style={[styles.view, styles.blue]}><Mates /></View>
                </ScrollView>
            </Container>
        );
    }
}