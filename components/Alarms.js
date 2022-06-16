import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import AlarmItem from './AlarmItem';
import Database from './Database';
import MyButton from './MyButton';

class Alarms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarms: []
        };
    }
    componentDidMount = () => {

        this.getAlarms()
    }
    getAlarms = () => {
        Database.getAll().then((all) => {
            this.setState({
                alarms: (JSON.parse(all)).rows["_array"]
            })
        })
    }
    addAlarm = () => {
        this.props.navigation.navigate("CreateAlarm", { refresh: this.refreshAlarms })

    }
    deleteAlarm = (id) => {
        Database.remove(id)

        let arr = this.state.alarms
        arr.map((elem, i) => {
            if (elem.id == id) {
                console.log(i)
                arr.splice(i, 1);

            }
        })
        this.setState({
            week: arr
        })
    }
    refreshAlarms = () => {
        this.getAlarms()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.alarms}>
                        {this.state.alarms.map((item, i) => (
                            <View style={{ marginLeft: 30, marginRight: 30, marginBottom: 15 }}>
                                <AlarmItem
                                    key={item.id}
                                    id={item.id}
                                    data={item}
                                    delete={() => this.deleteAlarm(item.id)}
                                />
                                <View
                                    style={{
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1,
                                    }}
                                />

                            </View>
                        ))}
                    </View>


                </ScrollView>
                <View style={styles.buttonView}>
                    <MyButton
                        title="&#43;"
                        color="#ed1b76"
                        size={'50'}
                        bgcolor=""
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            borderRadius: 90,
                            borderStyle: "solid",
                            borderWidth: (1),
                        }}
                        function={this.addAlarm.bind(this)}
                    />
                </View>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
    },
    alarms: {
        flex: 9,
        flexDirection: 'column',
    },
    buttonView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    }
})

export default Alarms;
