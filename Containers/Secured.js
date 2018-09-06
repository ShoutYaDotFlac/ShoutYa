import React, {Component} from "react";
import {ScrollView, Text, View, Button} from "react-native";
import HomeScreen from './HomeScreen.js';


export default class Secured extends React.Component {
	render() {
		return (
			<ScrollView style={{padding: 20}}>
				<Text style={{fontSize: 27}}>Welcome</Text>
				<View style={{margin: 20}} />
        <HomeScreen />
				<Button onPress={this.props.onLogoutPress} title="Logout" />
			</ScrollView>
		);
	}
}
