import {GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAILURE} from "./Actions";

const initialState = {
    list: [],
    fetchDataCompleted: false
};

export default function (state = initialState, action) {

    let {payload} = action;

    if (action.type == GET_LIST_REQUEST) {
        return {
            ...state,
            fetchDataCompleted: false
        }
    }

    if (action.type == GET_LIST_SUCCESS) {
        return {
            ...state,
            fetchDataCompleted: true,
            list: payload
        }
    }

    if (action.type == GET_LIST_FAILURE) {
        return {
            ...state,
            fetchDataCompleted: false
        }
    }

    return state;

}