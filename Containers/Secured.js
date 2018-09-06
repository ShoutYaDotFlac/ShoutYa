import React, {Component} from "react";
import {ScrollView, Text, View, Button, Header} from "react-native";
import HomeScreen from './HomeScreen.js';
import UserProfile from './UserProfile.js';

export default class Secured extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      showShiftInfo: false
    }
  }

	render() {
		return (
			<ScrollView style={{padding: 20}}>
				<Text style={{fontSize: 27}}>Welcome</Text>
				<View style={{margin: 20}} />
        <HomeScreen />
				<UserProfile />
				<Button onPress={() => this.setState({showShiftInfo: true})} title="Shift Info Modal"/>
				<Button onPress={this.props.onLogoutPress} title="Logout" />
			</ScrollView>
		);
	}
}
