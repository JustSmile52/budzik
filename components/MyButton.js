import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PropTypes from 'prop-types';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onPress = this.onPress.bind(this)
    }
    componentDidMount = () => {
        console.log(this.props.bgcolor)
    }
    onPress(data) {
        this.props.function(this.props.data)
    }

    render() {
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                onPress={() => {
                    this.onPress();
                }}
                style={[styles.container]}>
                <View style={[styles.viev, { background: "red" }, { ...this.props.style }]}>
                    <Text style={[
                        styles.text,
                        { color: this.props.color },
                        {
                            fontSize: parseInt(this.props.size),
                            fontWeight: 'bold'
                        }
                    ]}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableNativeFeedback >
        );
    }
}

MyButton.propTypes = {
    // login: PropTypes.string.isRequired,
    // pass: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

};

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        display: 'flex',

    },
    viev: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 10,

    }
})
export default MyButton;
