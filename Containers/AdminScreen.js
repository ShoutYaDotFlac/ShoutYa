import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';

class AdminScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                </Text>

                <Button onPress={this.props.onLogoutPress} title="Logout" />
            </ScrollView>
        )
    }
}

export default AdminScreen;
