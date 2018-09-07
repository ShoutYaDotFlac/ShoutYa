import React, { Component } from 'react';
import {View, ScrollView, Text, Button, TouchableOpacity} from 'react-native';
import { Styles } from './Styles.js';

class ShiftDetailed extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      displayModal: false
    }
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
          {this.state.displayModal && (
            <View style={Styles.modal}>
              <Text style={{
                paddingBottom: 20
              }}>
                Are you sure you want to open your shift?
              </Text>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <Button onPress={this.props.onShiftDetailedPress} title="Yes" style={Styles.button}/>
                <Button onPress={this.props.onShiftDetailedPress} title="No" style={Styles.button}/>
              </View>
            </View>
          )}
        </ScrollView>
        <TouchableOpacity onPress={() => this.setState({displayModal:true})}>
          <ScrollView>
            <Text style={Styles.openShiftBanner}>Open Shift</Text>
          </ScrollView>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShiftDetailed;
