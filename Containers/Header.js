import React, { Component } from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';


class HeaderBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

  render() {
    return (
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Button title="Gear"></Button>
        <Text>
          Open Shift
        </Text>
        <Button onPress= {this.props.onOSPRess} Title="More"></Button>
        
      </View>
    );
  }
}

export default HeaderBanner;
