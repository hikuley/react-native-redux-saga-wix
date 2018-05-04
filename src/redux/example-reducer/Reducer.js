import {EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_FAILURE} from "./Actions";

const initialState = {};

export default function (state = initialState, action) {

    let {payload} = action;


    if (action.type == EXAMPLE_REQUEST) {
        return{
            ...state,
            // if there is one data of the object , you need to write it.
        }
    }

    if (action.type == EXAMPLE_SUCCESS) {
        return{
            ...state,
            // if there is one data of the object , you need to write it.
        }
    }

    if (action.type == EXAMPLE_FAILURE) {
        return{
            ...state,
            // if there is one data of the object , you need to write it.
        }
    }

    return state;

}