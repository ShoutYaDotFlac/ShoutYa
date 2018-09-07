import React, {Component} from "react";
import {ScrollView, Text, TextInput, View, Button} from "react-native";
import OpenShifts from './OpenShifts';

class Login extends React.Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>Login</Text>
                <TextInput placeholder="Username"/>
                <TextInput placeholder="Password"/>
                <View style={{margin: 7}}/>
                <Button onPress={this.props.onLoginPress} title="User Login"/>

                <View style={{margin: 7}}/>
                <Button onPress={this.props.onAdminPress} title="Admin Login"/>

            </ScrollView>
        );
    }
}

export default Login;
