
/**
 * MenuPageLevelOneReducer.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

import * as actionTypes from '../../constants/Actions'

const initialState = {};

// demo info reducer
export default function SelectRestaurant (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_RESTAURANT:
            return action.payload;
        default:
            return state
    }
}