import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text } from 'react-native';
import { Styles } from './Styles.js';

export default class OpenShifts extends Component {
  render() {
    return (
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

              <View style={Styles.oscleaning}>
                  <Text>This is a CLEANING job and these are details of the job!</Text>
                    <Text>START: 8PM</Text>
                    <Text>END: 11PM</Text>
                </View>

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

                      <View style={Styles.oscleaning}>
                          <Text>This is a CLEANING job and these are details of the job!</Text>
                            <Text>START: 8PM</Text>
                            <Text>END: 11PM</Text>
                        </View>

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

                              <View style={Styles.oscleaning}>
                                  <Text>This is a CLEANING job and these are details of the job!</Text>
                                    <Text>START: 8PM</Text>
                                    <Text>END: 11PM</Text>
                                </View>
      </ScrollView>
    );
  }
}
