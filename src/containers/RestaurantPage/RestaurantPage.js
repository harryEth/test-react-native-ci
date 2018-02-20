/**
 * RestaurantPage.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

//import dependencies
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import component
import * as restaurantPageActions from './RestaurantPageActions';
import {getRestaurant} from "../../fetch/restaurants/restaurant";
import {RestaurantCard} from "../../components/RestaurantCard/RestaurantCard";
import RestaurantCardFactory from "../../components/RestaurantCard/RestaurantCardFactory";

class RestaurantPage extends Component {

    state = {
        restaurantList: []
    };

    async componentDidMount() {
        let coord = {
            lng: '-86.836694',
            lat: '40.418559'
        };
        let restaurantListData = await getRestaurant(coord);

        this.setState({restaurantList: this.parseRestaurantList(restaurantListData)});

        if (restaurantListData.length > 0) {
            let actions = this.props.restaurantPageActions;
            actions.selectRestaurant(restaurantListData[1]);
        }
    }

    parseRestaurantList = (restaurantListData) => (
        restaurantListData.map((listItem, index) => {
           let restaurantList =  new RestaurantCardFactory(listItem, index);
              return <RestaurantCard key={index} {...restaurantList}/>
        })
    );


    render() {

        return (
            <ScrollView style={styles.container}>
                {this.state.restaurantList}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5'
    },
    contentContainer: {
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    }
});

// -------------------redux react --------------------

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        restaurantPageActions: bindActionCreators(restaurantPageActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantPage)

