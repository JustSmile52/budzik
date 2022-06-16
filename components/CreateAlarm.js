import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Database from './Database';
import MyButton from './MyButton';

class CreateAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    addAlarm = () => {
        let hours = '00'
        let minutes = '00'

        Database.addAlarm(hours, minutes)

        this.props.route.params.refresh()
        this.props.navigation.goBack()
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <MyButton
                    title="+"
                    color="#ed1b76"
                    size={'50'}
                    bgcolor=""
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 90,
                        borderStyle: "solid",
                        borderWidth: (1),



                    }}
                    function={this.addAlarm.bind(this)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default CreateAlarm;
