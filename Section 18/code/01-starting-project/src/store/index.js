import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
/**  Moved to counter.js file*/

// const initialState = {counter: 0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// });
// export const counterActions = counterSlice.actions;

/**  Moved to auth.js file*/

// const initialAuthState = {isAuthenticated: false};

// const authSlice = createSlice({
//     name: 'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         }
//     }
// });
// export const authActions = authSlice.actions;

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
  });


// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//         counter: state.counter,
//         showCounter: !state.showCounter
//     };
//   }
//   return state;
// }

// const store = createStore(counterReducer);

export default store;

// const counterSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});