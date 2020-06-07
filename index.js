/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { value: state.value + 1 };
        case 'SUB':
            return { value: state.value - 1 };
        default:
            return state;
    }
}
const store = createStore(reducer);

const reduxTutor = () => <Provider store={store}>
    <App />
</Provider>
AppRegistry.registerComponent(appName, () => reduxTutor);
