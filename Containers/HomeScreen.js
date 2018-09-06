import React, { Component } from 'react';
import {
    ScrollView,
    Text
} from 'react-native';
import MyCalendar from './MyCalendar';


export default class HomeScreen extends React.Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text>Welcome to the most disruptive shift changing app in the worldddddd</Text>
                <MyCalendar/>
            </ScrollView>
        )
    }
}
