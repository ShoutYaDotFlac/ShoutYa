import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title } from 'native-base';

import HomeScreen from './HomeScreen.js';
import Mates from './Mates.js';
import Friend from './Friend.js';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'blue',
        width: width,
        height: height + 50,
        borderRadius: 10,
    }
});

export default class Main extends React.Component {
    render() {
        return (
            <Container style={{ alignContent: 'center' }}>
                <Header>
                    <Left />
                    <Body>
                        <Text style={{ color: 'white', fontSize: 30 }}>ShoutYa</Text>
                    </Body>
                    <Right />
                </Header>
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
                    <View style={[styles.view, { backgroundColor: 'lightblue' }]}><Mates /></View>
                    <View style={[styles.view, { backgroundColor: 'lightyellow' }]}><HomeScreen /></View>
                </ScrollView>
            </Container>
        );
    }
}