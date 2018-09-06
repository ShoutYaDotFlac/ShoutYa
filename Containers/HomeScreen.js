import React, { Component } from 'react';
import {ScrollView, Text, Button} from 'react-native';
import MyCalendar from './MyCalendar';
import ShiftInfo from './ShiftInfo';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 'Click on a day to view available shifts'
    }
    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(day) {
    let word;
    if (typeof day == 'object')
      this.setState({selectedDay: day.dateString});
  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
          <Text style={{fontSize: 30}}>Open Shift</Text>
          <Text>{this.state.selectedDay}</Text>
          <MyCalendar selectDay={this.selectDay}/>
          <ShiftInfo date={this.state.selectedDay}/>
          <Button onPress={this.props.onProfilePress} title="Profile" />
      </ScrollView>
    )
  }
}
