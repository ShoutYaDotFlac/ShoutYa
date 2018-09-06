import React, { Component } from 'react';
import {View, ScrollView, Text, Button, TouchableOpacity} from 'react-native';
import { Styles } from './Styles.js';

export default class ShiftDetailed extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.props.onHomePress}>
          <View >
            <Text style={Styles.closeBanner} >Close</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{
          height:530
        }}>
          <Text>
            Info{'\n'}
            Info{'\n'}
            Info{'\n'}
            Info{'\n'}
            Info{'\n'}
          </Text>
        </ScrollView>
        <ScrollView>
          <Text style={Styles.openShiftBanner}>Open Shift</Text>
        </ScrollView>
      </View>
    );
  }
}
