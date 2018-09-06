import React, { Component } from 'react';
import {View, ScrollView, Text, Button} from 'react-native';
import { Styles } from './Styles.js';
import ShiftDetailed from './ShiftDetailed';

class ShiftInfo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showDetails: false
    }
  }

  getShiftInfo() {
    if (this.props.selectedDay =='2018-09-01') {
      return "Cleaning job \nSpotless \n$20/hr";
    }
    else {
      return "Cleaning job \nNotless \n$24/hr";
    }
  }

  render() {
    return(
      <View>
        <View style={{borderColor: 'black', padding: 5}}>
          <Text>{this.getShiftInfo()}</Text>
        </View>
      </View>
    );
  }
}

export default ShiftInfo;
