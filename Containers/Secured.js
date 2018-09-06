import React, {Component} from "react";
import {ScrollView, Text, View, Button, Header} from "react-native";
import HomeScreen from './HomeScreen.js';
import UserProfile from './UserProfile.js';

export default class Secured extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      pageId: 0
    }
		this.viewHomeScreen = this.viewHomeScreen.bind(this);
		this.viewUserProfile = this.viewUserProfile.bind(this);
		this.viewSettings = this.viewSettings.bind(this);
  }

	viewHomeScreen() {
		this.setState({pageId: 0});
	}
	viewUserProfile() {
		this.setState({pageId: 1});
	}
	viewSettings() {
		this.setState({pageId: 2});
	}

	render() {
		switch (this.state.pageId) {
			case 0: {
				return (
					<ScrollView style={{padding: 20}}>
						<HomeScreen onProfilePress={this.viewUserProfile}/>
					</ScrollView>
				);
			}
			case 1: {
				return (
					<ScrollView style={{padding: 20}}>
						<Text style={{fontSize: 27}}>User Profile</Text>
						<UserProfile onHomePress={this.viewHomeScreen} onLogoutPress={this.props.onLogoutPress}/>
					</ScrollView>
				);
			}
		}
	}
}
