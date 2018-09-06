import React, {Component} from "react";
import {AppRegistry, Text, TextInput, View} from "react-native";
import Login from './src/screens/Login';
import Secured from './src/screens/Secured';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: ""};
	}

	render() {

    if (this.state.isLoggedIn)
      return <Secured
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else
      return <Login
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;


    //
		// return (
		// 	<View style={{padding: 10}}>
		// 		<TextInput
		// 			style={{height: 40}}
		// 			placeholder="Type here to translate!"
		// 			onChangeText={text => this.setState({text})}
		// 		/>
		// 		<Text style={{padding: 10, fontSize: 42}}>
		// 			{this.state.text
		// 				.split(" ")
		// 				.map(word => word && "👷")
		// 				.join(" ")}
		// 		</Text>
		// 	</View>
		// ); //end of return
	} //end of render
} //end of class

AppRegistry.registerComponent(ReactNativeStormpath , () => ReactNativeStormpath );
