/**
 * ChangeAddress.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {GooglePlacesInput} from "../../components/GooglePlaceInput/GooglePlaceInput";

//import component

export default class ChangeAddress extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GooglePlacesInput/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

