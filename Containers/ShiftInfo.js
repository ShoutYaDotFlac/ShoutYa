import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import { Styles } from './Styles.js';

export default class ShiftInfo extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return(
      <View>
        <View style={Styles.closeBanner}>
          <Text>
            Close
          </Text>
        </View>
        <ScrollView style={{height: 100}}>
          <Text>
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
            Info{"\n"}
          </Text>
        </ScrollView>
        <View style={Styles.swapShiftBanner}>
          <Text>
            Take my Shift
          </Text>
        </View>
      </View>
    );
  }
}
