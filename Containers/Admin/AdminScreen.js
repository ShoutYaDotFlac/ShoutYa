import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    Button,
    View
} from 'react-native';

import {Styles} from '../Styles.js';

class AdminScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    hello world
                </Text>

                <ScrollView>

                    <View style={Styles.oscatering}>
                        <Text>This is a CATERING job and these are details of the job!</Text>
                        <Text>START: 6AM</Text>
                        <Text>END: 11AMPM</Text>
                    </View>

                    <View style={Styles.oscleaning}>
                        <Text>This is a CLEANING job and these are details of the job!</Text>
                        <Text>START: 9AM</Text>
                        <Text>END: 5PM</Text>
                    </View>

                    <View style={Styles.oscatering}>
                        <Text>This is a CATERING job and these are details of the job!</Text>
                        <Text>START: 2PM</Text>
                        <Text>END: 7PM</Text>
                    </View>
                </ScrollView>

                <Button onPress={this.props.onLogoutPress} title="Logout"/>
            </ScrollView>
        )
    }
}

export default AdminScreen;
