/**
 * AddressBar.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React from 'react';
import PropTypes from 'prop-types'
import {Text, TouchableOpacity} from 'react-native';

//import component

export const AddressBar = (props) => (
    <TouchableOpacity onPress={props.onClick}>
        <Text>
            {props.label}
        </Text>
    </TouchableOpacity>
);

AddressBar.propTypes = {
    label: PropTypes.string.isRequired
};
