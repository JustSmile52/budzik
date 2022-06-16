import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

class DayOfWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // active: this.props.active
        };
    }
    componentDidMount = () => {
    }
    onPress() {
        this.props.onPress(this.props.id)
    }
    render() {
        return (
            this.props.active ?
                <TouchableOpacity
                    style={styles.dayActiveView}
                    onPress={() => { this.onPress() }}>
                    <Text style={styles.dayName}> {this.props.name} </Text>
                </TouchableOpacity >
                :
                <TouchableOpacity
                    style={styles.dayNoActiveView}
                    onPress={() => { this.onPress() }}>
                    <Text style={styles.dayName}> {this.props.name} </Text>
                </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({
    dayName: {
        fontSize: 15,
        color: 'white',
    },
    dayActiveView: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        flex: 1,
        borderRadius: 90,
        width: (40),
        height: (40),
        borderStyle: "solid",
        backgroundColor: "#ed1b76"
    },
    dayNoActiveView: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        flex: 1,
        borderRadius: 90,
        width: (40),
        height: (40),
        borderStyle: "solid",
    }
})
export default DayOfWeek;
