/**
 * MenuPageHeader.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {asseets} from '../../assets/restaurantIcons'

//import component

export const MenuPageHeader = (props) => {

    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={asseets["beijing"].uri}
                />
            </View>
            <View>
                <Text>
                    {props.name}
                </Text>
                <Text>
                    {props.promotion}
                </Text>
                <Text>
                    {props.delivery}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 80
    },
    restaurantName: {
        fontSize: 20,
        // color: '#3d3d3d'
    },
    restaurantPromotion: {

    },
    delivery: {

    }

});


MenuPageHeader.propTypes = {
    name: PropTypes.string.isRequired,
    promotion: PropTypes.string,
    delivery: PropTypes.string,
    tags: PropTypes.string
};

MenuPageHeader.defaultProps = {
    name: '',
    promotion: '',
    delivery: '',
    tags: '',
};