import React from 'react';
import { StyleSheet, Text, View, TextInput , Image} from 'react-native';
import HomeScreen from './HomeScreen.js';
import Main from './Mates.js';
import Friend from './Friend.js';

/*React Navigator*/
// import { createStackNavigator } from 'react-navigation';
/*End of React Navigator*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex_1: {
        flex: 1
    },
    flex_test_2: {
        flex: 2,
        backgroundColor: '#000'
    },
    flex_test_3: {
        flex: 3,
        backgroundColor: '#099'
    }
});

// const RootStack = createStackNavigator(
//     {
//         Home: HomeScreen,
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );

export default class Main extends React.Component {
    render() {
        return (
            <View>
                <HomeScreen/>
                <Mates />
                <Friend />
            </View>
        );
    }
}