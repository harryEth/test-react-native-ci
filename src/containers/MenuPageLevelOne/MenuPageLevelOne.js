/**
 * MenuPageLevelOne.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View} from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//import component
import {MenuPageHeader} from "../../components/MenuPageHeader/MenuPageHeader";
import {getMenu} from "../../fetch/menu/menu";
import MenuPageHeaderFactory from "../../components/MenuPageHeader/MenuPageHeaderFactory";


class MenuPageLevelOne extends Component {

    state = {
        menuHeader: {}
    };

    async componentDidMount () {
        let restaurantData = this.props.selectedRestaurant;

        let menuHeaderData = new MenuPageHeaderFactory(restaurantData);

        this.setState({menuHeader: menuHeaderData});

        let menuData = await getMenu(restaurantData._id);



    }

    render() {

        const {menuHeader} = this.state;

        return (
            <View>
                <MenuPageHeader {...menuHeader} />

            </View>
        )
    }
}

// -------------------redux react --------------------

function mapStateToProps(state) {
    return {
        selectedRestaurant: state.selectedRestaurant
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuPageLevelOne)

