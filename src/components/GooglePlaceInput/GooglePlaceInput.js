/**
 * GooglePlaceInput.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {
    PixelRatio
} from 'react-native';

//import component
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GooglePlaceApiKey} from '../../constants/credentials'

export const GooglePlacesInput = (props) => {
    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' isw provided when fetchDetails = true
                console.log(data);
                console.log(details);
            }}
            getDefaultValue={() => {
                return ''; // text input default value
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: GooglePlaceApiKey,
                language: 'en', // language of the results
                types: 'address' // default: 'geocode'
            }}
            styles={styles}

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.

        />
    );
}

const styles = {
    container: {
        backgroundColor: 'white',
        borderBottomColor: '#000',
        width: 300
    },
    textInputContainer: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        height: 25,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: "100%"
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        height: 38,
        color: '#5d5d5d',
        fontSize: 16
    },
    predefinedPlacesDescription: {
        color: '#1faadb'
    },
    poweredContainer: {
        display: "none"
    },
    listView: {
        backgroundColor: 'white'
    }
};