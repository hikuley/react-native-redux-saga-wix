import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as form} from 'redux-form';

import createSagaMiddleware from 'redux-saga'
import configureSaga from "../saga/configureSaga";
import homeReducer from "../redux/home/Reducer"

const reducers = combineReducers({
    form,// its needed for the redux-form configuration..
    homeReducer: homeReducer
});


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(configureSaga);
export default store;
