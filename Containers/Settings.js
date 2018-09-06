import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Setting
                </Text>

                <Button onPress={this.props.onLogoutPress} title="Logout" />
            </ScrollView>
        )
    }
}