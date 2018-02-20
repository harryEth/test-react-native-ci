/**
 * AddressBar.test.js.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React from 'react';
import { shallow } from 'enzyme';


//import component
import {AddressBar} from '../components/AddressBar/AddressBar'


describe('rendering', () => {

    let warapper;

    beforeEach(() => {
        warapper = shallow(<AddressBar label={"Delivery address"}/>)
    });

    it('should render a <TouchableOpacity/>', () => {
        expect(warapper.find('TouchableOpacity')).toHaveLength(1)
    });
    it('should render a lable', () => {
        expect(warapper.find('Text').contains('Delivery address')).toBe(true);
    });
    describe('no type', () => {
        it('should have the primary style')
    })
});

describe('interaction', () => {

    let warapper;
    let props;

    beforeEach(() => {
        props = {
            label: 'Delivery address',
            onClick: jest.fn()
        };
        warapper = shallow(<AddressBar {...props} />)
    });

    describe('clicking the button', () => {

        beforeEach(() => {
            warapper.find('TouchableOpacity').prop('onPress')()
        });

        it('should call the onClick callback', () => {
            expect(props.onClick).toHaveBeenCalledTimes(1)
        })
    })
});