import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("rzyczniak_milosz_1.db");
// proszę o taki schemat nazywania swojej bazy danych, zwłaszcza podczas testów na tablecie

class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static createTable() {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS finally2 (id integer primary key not null, hours text, minutes text, active boolean, monday boolean, tuesday boolean, wednesday boolean, thursday boolean, friday boolean, saturday boolean, sunday boolean);"
            );
        });
    }
    static addAlarm(hours, minutes) {
        console.log("alarm added")
        db.transaction(
            tx => {
                tx.executeSql("INSERT INTO finally2 (hours, minutes, active, monday, tuesday, wednesday, thursday, friday, saturday, sunday) values ('00', '00', 0,0,0,0,0,0,0,0)");
            },
        )
    }
    static getAll() {
        var query = "SELECT * FROM finally2";
        //
        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                // console.log(JSON.stringify(results))

                resolve(JSON.stringify(results));

            }, function (tx, error) {

                reject(error);

            });
        }))
    }

    static remove(id) {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM finally2 WHERE (id = " + id + ");"
            );
        });

    }
}

export default Database;
