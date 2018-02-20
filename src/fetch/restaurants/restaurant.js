/**
 * restaurant.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

import {get} from "../get";

export const getRestaurant  = async (coordinates) => {

    const query = '/restaurants?location=' + coordinates.lng + ',' + coordinates.lat;



    // const query1 = '/restaurants?location=-149.90027780000003,61.2180556';

    return await get(query).catch((ex) => {
        throw ex;
    })
};