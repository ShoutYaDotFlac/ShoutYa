import React, {Component} from 'react';
import { View, Text, ScrollView, Button, Image } from 'react-native';

class UserProfile extends React.Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>Michael Dao</Text>
        <Text>Professional cleaning lady</Text>
        <Image source={require("../res/duck.jpg")}/>
        <Button onPress={this.props.onLogoutPress} title="Logout" />
      </View>
    );
  }
}

export default UserProfile;
