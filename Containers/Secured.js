import React, {Component} from "react";
import {ScrollView, Text, View, Button, Header} from "react-native";
import HomeScreen from './HomeScreen.js';
import ShiftDetailed from './ShiftDetailed.js';
import UserProfile from './UserProfile.js';

class Secured extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      pageId: 0
    }
		this.viewHomeScreen = this.viewHomeScreen.bind(this);
		this.viewUserProfile = this.viewUserProfile.bind(this);
		this.viewSettings = this.viewSettings.bind(this);
		this.viewShiftDetails = this.viewShiftDetails.bind(this);
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
	viewShiftDetails() {
		this.setState({pageId: 3});
	}

	render() {
		switch (this.state.pageId) {
			case 0: {
				return (
					<ScrollView style={{padding: 20}}>
						<HomeScreen onProfilePress={this.viewUserProfile} showDetails={this.viewShiftDetails} />
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
			case 3: {
				return (
					<ScrollView>
						<ShiftDetailed onHomePress={this.viewHomeScreen}/>
					</ScrollView>
				)
			}
		}
	}
}

export default Secured;
