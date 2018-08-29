import React from 'react';
import { Text, View, TextInput, Image, Thumbnail, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200
    }
});


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}