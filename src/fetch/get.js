/**
 * get.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

import {URLs} from '../constants/URLs';

export function get(query) {
    // set fetch options get with credentials include
    let myFetchOptions = {
        method: 'GET',
        credentials: 'include'
    };

    //fetch the data then return the data with promise
    return fetch(URLs+ query, myFetchOptions).then(res => res.json());


}