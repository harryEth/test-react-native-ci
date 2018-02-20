/**
 * RestaurantCardFactory.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import _ from 'lodash'

//import component

export default class RestaurantCardFactory {

    constructor(data, index){
        this.index = index;
        this._id = data._id || '';
        this.delivery = data.delivery.provider || '';
        this.promotion = _.get(data, 'promotion["zh-CN"]') || '';
        this.restaurantName = data.name["zh-CN"] || '';
        this.tags = data.tags[0] || '';

    }

}
