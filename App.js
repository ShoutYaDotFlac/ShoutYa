import React, {Component} from "react";
import {AppRegistry, Text, TextInput, View} from "react-native";
import Login from './Containers/Login';
import Secured from './Containers/Secured';
import AdminScreen from './Containers/Admin/AdminScreen';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin: false
        }
    }

    render() {
        if (this.state.isAdmin) {
            return <AdminScreen
                onLogoutPress={() => this.setState({isAdmin: false})}
            />
        }

        else if (this.state.isLoggedIn)
            return <Secured
                onLogoutPress={() => this.setState({isLoggedIn: false})}
            />;
        else
            return <Login
                onLoginPress={() => this.setState({isLoggedIn: true})}
                onAdminPress={() => this.setState({isAdmin: true})}
            />;
    } //end of render
} //end of class

export default App;

AppRegistry.registerComponent(App, () => App);
