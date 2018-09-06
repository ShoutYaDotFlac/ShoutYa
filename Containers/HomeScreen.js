import React, { Component } from 'react';
import {
    ScrollView,
    Text
} from 'react-native';
import MyCalendar from './MyCalendar';
import ShiftInfo from './ShiftInfo';


export default class HomeScreen extends React.Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text>Click on a date to view available shifts</Text>
                <MyCalendar/>
            </ScrollView>
        )
    }
}
