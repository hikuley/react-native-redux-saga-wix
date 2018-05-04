export const EXAMPLE_REQUEST = "EXAMPLE_REQUEST";
export const EXAMPLE_SUCCESS = "EXAMPLE_SUCCESS";
export const EXAMPLE_FAILURE = "EXAMPLE_FAILURE";


export const exampleRequest = (data) => ({
    type: EXAMPLE_REQUEST,
    payload: data
});

export const exampleSuccess = (data) => ({
    type: EXAMPLE_SUCCESS,
    payload: data
});

export const exampleFailure = (data) => ({
    type: EXAMPLE_FAILURE,
    payload: data
});
