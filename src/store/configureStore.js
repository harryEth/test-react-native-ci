/**
 * configureStore.js
 *
 * @author Hanyu Xue <harry.xue.ricepo@gmail.com>
 * @project ricepo-react
 * @license January, 2018 (C) Ricepo LLC. All Rights Reserved.
 */

import {createStore} from 'redux'
import rootReducer from '../reducer/reducer'



export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    return store;
}
