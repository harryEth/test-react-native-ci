/**
 * reducer.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

import {combineReducers} from 'redux'
import {reducer} from './reducerHolder'
import selectedRestaurant from '../containers/RestaurantPage/RestaurantPageReducer'

export default combineReducers({
    reducer,
    selectedRestaurant
});