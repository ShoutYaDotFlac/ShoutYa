import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'

var { width, height } = Dimensions.get('window');
var margin = 20;
var size = width/2-margin*3;

const styles = StyleSheet.create({
    mateIcon: {
        width: size, 
        height: size, 
        margin: margin,
    },
    round: {
        borderRadius: size/2,
    }
});

export default class MateIcon extends React.Component {
    constructor(props) {
        super();
        this.state = {
            pressed: false
        };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress = () => {
        this.setState({pressed: !this.state.pressed});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <Image 
                    style={this.state.pressed? styles.mateIcon : [styles.mateIcon, styles.round]}
                    source={{uri: "https://scontent.fmel5-1.fna.fbcdn.net/v/t1.0-9/29133986_2094014444168618_2310728195288155120_n.jpg?_nc_cat=0&oh=c028641f05643e02986924b783b9518f&oe=5BF2C3F8"}}/>
            </TouchableWithoutFeedback>
        );
    }
}