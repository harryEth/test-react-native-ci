/**
 * restaurantCard.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import {asseets} from "../../assets/restaurantIcons";

//import component

export const RestaurantCard = ({_id, index, delivery, restaurantName, tags, promotion}) => {
    let logo = delivery ? <Image style={styles.logo} source={asseets.logo.uri}/> : <View/>;

    return (
        <View style={styles.container}>
            <View>
                {logo}
            </View>
            <View >
                <Image style={styles.icon} source={asseets.bbq.uri}/>
            </View>
            <View>
                <Text>
                    {restaurantName}
                </Text>
                <Text>
                    {promotion}
                </Text>
            </View>
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 120,
        height: 120
    },
    logo: {
        width: 30,
        height: 16
    }
});

