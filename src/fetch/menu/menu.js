/**
 * menu.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */
import {get} from "../get";

export const getMenu  = async (restId) => {
    const query = '/restaurants/'+ restId +'/menu';

    return await get(query).catch((ex) => {
        throw ex;
    })
};