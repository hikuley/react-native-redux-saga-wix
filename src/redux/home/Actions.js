export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILURE = "GET_LIST_FAILURE";


export const getListRequest = () => ({
    type: GET_LIST_REQUEST
});

export const getListSuccess = (data) => ({
    type: GET_LIST_SUCCESS,
    payload: data
});

export const getListFailure = () => ({
    type: GET_LIST_FAILURE
});
