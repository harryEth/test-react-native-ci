/**
 * index.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {NativeRouter, Route, Link} from 'react-router-native'

//import component
import {AddressBar} from '../components/AddressBar/AddressBar'
import ChangeAddress from "./ChangeAddress/ChangeAddress";
import MenuPageLevelOne from "./MenuPageLevelOne/MenuPageLevelOne";
import RestaurantPage from "./RestaurantPage/RestaurantPage";

export default class Index extends Component {
    render() {
        return (
            <NativeRouter>
                    <View>
                        <Link to="/restaurant"><Text>Test Link</Text></Link>
                        <Link to="/menu"><Text>menu Link</Text></Link>
                        <Route path="/address" component={ChangeAddress}/>
                        <Route path="/menu" component={MenuPageLevelOne}/>
                        <Route path="/restaurant" component={RestaurantPage}/>
                    </View>
            </NativeRouter>
        )
    }
}

