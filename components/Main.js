import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';
import * as Font from "expo-font";
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import { Dimensions } from "react-native";
import Database from "./Database";



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontloaded: false,
        };

    }
    componentDidMount = async () => {
        Database.createTable();

        await Font.loadAsync({
            'myfont': require('../assets/font01.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
        });
        this.setState({ fontloaded: true })
    }

    onPress = () => {

        this.props.navigation.navigate("s2")

    }


    render() {
        return (
            this.state.fontloaded
                ?
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.onPress}
                >
                    <View style={styles.banner}>
                        <Text style={styles.bannerText}>SQLITE    </Text>
                        <Text style={styles.bannerText}>     App</Text>

                    </View>
                    <View style={styles.page}>
                        <Text style={styles.pageText}>Click to start</Text>
                    </View>
                </TouchableOpacity >
                :
                null
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    banner: {
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
    bannerText: {
        fontSize: 50,
        color: '#fff',
        fontFamily: 'myfont'
    },
    pageText: {
        fontSize: 30,
        color: '#ed1b76',
        fontWeight: 'bold'
    },
    page: {
        flex: 3,
        display: 'flex',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },
})
export default Main;
