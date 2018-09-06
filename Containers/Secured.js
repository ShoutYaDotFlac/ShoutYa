import React, {Component} from "react";
import {ScrollView, Text, View, Button} from "react-native";
import HomeScreen from './HomeScreen.js';
import Settings from './Settings.js';


export default class Secured extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pageId: 0
		};

		this.navToSettings = this.navToSettings.bind(this);
	}

	navToSettings() {
		this.setState({pageId: 1});
	}

	render() {
		switch (this.state.pageId) {
			case 0: {
				return (
					<ScrollView style={{padding: 20}}>
						<Text style={{fontSize: 27}}>Welcome</Text>
						<View style={{margin: 20}} />
						<HomeScreen />
						<Button onPress={this.navToSettings} title="Settings" />
					</ScrollView>
				);
				break;
			}
			case 1: {
				return (
					<ScrollView style={{padding: 20}}>
						<Settings onLogoutPress={this.props.onLogoutPress}/>
					</ScrollView>
				)
				break;
			}
		}
		
	}
}
