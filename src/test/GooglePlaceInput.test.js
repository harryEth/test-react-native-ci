/**
 * GooglePlaceInput.test.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React from 'react';
import {} from 'react-native'
import { shallow } from 'enzyme';
import {GooglePlacesInput} from "../components/GooglePlaceInput/GooglePlaceInput";

//import component


describe('rendering', () => {

    let warapper;

    beforeEach(() => {
        warapper = shallow(<GooglePlacesInput/>)
    });

    it('should render a <GooglePlacesAutocomplete/>', () => {
        expect(warapper.find('GooglePlacesAutocomplete')).toHaveLength(1)
    });

});

describe('interaction', () => {

    let warapper;
    let props;

    beforeEach(() => {
        props = {

        };
        warapper = shallow()
    });

    describe('clicking the button', () => {

        beforeEach(() => {
        });

        it('should call the onClick callback')
    })
});