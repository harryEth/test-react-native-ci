/**
 * MenuPageHeaderFactory.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */


import _ from 'lodash'

//import component

export default class MenuPageHeaderFactory  {
    constructor(data){
        this.promotion = _.get(data, 'promotion["zh-CN"]') || '';
        this.name = _.get(data, 'name["zh-CN"]') || '';
        this.delivery = _.get(data, 'delivery.provider') || '';
        this.tags = _.get(data, 'tags[0]') || '';
    }
}
