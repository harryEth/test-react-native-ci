import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'
import Index from './src/containers/index'

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <Index/>
                    </View>
                </SafeAreaView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
