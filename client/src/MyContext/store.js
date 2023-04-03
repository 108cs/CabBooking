// store.js

import { createStore } from 'redux';

const initialState = {
    time: 0,
    fullName: "",
    email: "",
    cab: ""

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TIME':
            return {
                ...state,
                time: action.payload,
            };
        case 'UPDATE_NAME':
            return {
                ...state,
                fullName: action.payload,
            };
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.payload,
            };
        case 'UPDATE_CAB':
            return {
                ...state,
                cab: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
