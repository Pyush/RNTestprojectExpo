import * as types from './actionTypes'

const initialState = {
    loading: false,
    data: {},
    message: ''
}
const addpost = (state = initialState, action) => {
    console.log("action=>>", JSON.stringify(action));
    switch (action.type) {

        case types.API_LOADING:
            return {...state, loading: true};
        case types.API_LOADING_STOP:
            return {...state, loading: false};
        case types.API_FAILED:
            return {...state, loading: false, message: action.payload};
        case types.ON_ERROR_MESSAGE:
            return {...state, loading: false, message: action.payload};
        case types.API_SUCCESS:
            return {...state, loading: false, data: action.payload};
        default:
            return state
    }
}

export default addpost
