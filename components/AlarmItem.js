import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, FlatList, InteractionManager, Switch } from 'react-native';
import MyButton from './MyButton';
import DayOfWeek from './DayOfWeek';
class AlarmItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(Dimensions.get('window').height / 6), // początkowa wartość wysokości itema
            expanded: false, // zwinięty
            sHidden: true,
            active: this.props.data.on
        };
        this.toValue = 0  // przechowanie wartości animowanej, tutaj wysokości
    }
    componentDidMount = () => {
        // console.log(this.props.data.saturday)

        this.setState({
            week: [
                { id: 0, name: "MON", on: this.props.data.monday },
                { id: 1, name: "TUE", on: this.props.data.tuesday },
                { id: 2, name: "WED", on: this.props.data.wednesday },
                { id: 3, name: "THU", on: this.props.data.thursday },
                { id: 4, name: "FRI", on: this.props.data.friday },
                { id: 5, name: "SAT", on: this.props.data.saturday },
                { id: 6, name: "SUN", on: this.props.data.sunday },
            ]
        })
    }
    toggle() {

        if (!this.state.expanded) this.toValue = 400
        else this.toValue = 200

        Animated.spring(this.state.height, {
            toValue: this.toValue,
            useNativeDriver: false,
        }).start();

        // tu zmień this.state.expanded na przeciwny
        this.setState({
            expanded: !this.state.expanded
        })
    }
    more = () => {
        if (this.state.isHidden) {
            this.setState({
                height: new Animated.Value(Dimensions.get('window').height / 6),
                isHidden: !this.state.isHidden
            })
        }
        else {
            this.setState({
                height: new Animated.Value(Dimensions.get('window').height / 6 + 50),
                isHidden: !this.state.isHidden

            })
        }
    }
    delete = () => {
        this.props.delete(this.props.id)
    }
    toggleWeekDay = (id) => {
        let weekArr = this.state.week
        weekArr.map((elem, i) => {

            if (elem.id == id) {
                elem.on = !elem.on
            }
        })

        this.setState({
            week: weekArr
        })

    }
    toggleSwitch = () => {
        this.setState({ active: !this.state.active })

    };
    render() {
        return (
            /* &#8744;
                    &#8897;
                    &#9662;
                    &#10551;  */

            < Animated.View
                style={[{ height: this.state.height }]} // animowany styl, tutaj wysokość View
            >


                <View style={styles.container}>
                    <View style={styles.column}>

                        <Text style={styles.time}>
                            {this.props.data.hours}:{this.props.data.minutes}
                        </Text>
                        <MyButton
                            title="&#x1F5D1;"
                            color="#ed1b76"
                            size={'30'}
                            bgcolor="rgba(0,0,0,1)"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                            function={() => { this.delete() }}
                        />

                    </View>
                    <View style={styles.column, { flex: 1, }}>
                    </View>
                    <View style={styles.column}>
                        <Switch
                            trackColor={{ false: '#ffffff', true: '#f362a1' }}
                            thumbColor={this.state.active ? '#ed1b76' : '#757575'}
                            ios_backgroundColor="#388E3C"
                            onValueChange={this.toggleSwitch}
                            value={this.state.active}
                            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}

                        />

                        <MyButton
                            title="&#10551;"
                            color="#ed1b76"
                            size={'50'}
                            bgcolor="rgba(0,0,0,1)"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 70,
                                height: 70,
                                borderRadius: 90,
                                borderStyle: "solid",
                            }}
                            function={() => { this.more() }}
                        />
                    </View>
                </View>
                {
                    this.state.isHidden ?
                        <View style={[styles.moreViev,]} >
                            {this.state.week.map((item, i) => (
                                <DayOfWeek
                                    active={item.on}
                                    name={item.name}
                                    id={item.id}
                                    onPress={() => { this.toggleWeekDay(item.id) }}
                                >
                                </DayOfWeek>
                            ))}
                        </View>
                        :
                        null
                }
            </Animated.View >

        );
    }
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'

    },
    time: {
        fontSize: 30,
        color: 'white',
        flex: 3
    },
    moreViev: {
        flex: 1,
        flexDirection: 'row',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
    },
})
export default AlarmItem;
