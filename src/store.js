import { createStore, combineReducers } from 'redux';
import { counter } from './home/reducer';
let store = createStore(combineReducers({ count: counter }));  
export default store;
  