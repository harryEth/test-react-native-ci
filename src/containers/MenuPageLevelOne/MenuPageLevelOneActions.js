/**
 * MenuPageLevelOneAction.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import component
import * as actionTypes from '../../constants/Actions'

export function selectRestaurant(payload) {
    return {
        type: actionTypes.SELECT_RESTAURANT,
        payload
    }
}