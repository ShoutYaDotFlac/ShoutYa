import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class OpenShifts extends Component {
  render() {
    return (
      <View>

        <View style={{width: 400, height: 150, backgroundColor: 'steelblue'}}>
            <Text>This is a CATERING job and these are details of the job!</Text>
              <Text>START: 6AM</Text>
              <Text>END: 11AMPM</Text>
          </View>

          <View style={{width: 400, height: 150, backgroundColor: 'green'}}>
              <Text>This is a CLEANING job and these are details of the job!</Text>
                <Text>START: 9AM</Text>
                <Text>END: 5PM</Text>
            </View>

            <View style={{width: 400, height: 150, backgroundColor: 'steelblue'}}>
                <Text>This is a CATERING job and these are details of the job!</Text>
                  <Text>START: 2PM</Text>
                  <Text>END: 7PM</Text>
              </View>

              <View style={{width: 400, height: 150, backgroundColor: 'green'}}>
                  <Text>This is a CLEANING job and these are details of the job!</Text>
                    <Text>START: 8PM</Text>
                    <Text>END: 11PM</Text>
                </View>
      </View>
    );
  }
}
