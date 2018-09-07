import React, {Component} from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'


class HeaderBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <Icon reverse color='#517fa4' name='settings' onPress={this.props.onProfilePress}/>

                <Icon reverse color='#517fa4' name='home' onPress={this.props.onHomePress}/>

                <Icon reverse color='#517fa4' name='control-point' onPress={this.props.onOSPress}/>

            </View>
        );
    }
}

export default HeaderBanner;
