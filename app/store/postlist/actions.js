import * as types from './actionTypes'
import webservices from '../../webservice/webservices'


export const getPostList = () => {

    return async (dispatch) => {
        dispatch(apiLoading());

        var result = await webservices.ApiCall();
        dispatch(apiLoadingSuccess(result));


    }
};


const apiLoading = () => ({
    type: types.API_LOADING
});
const apiLoadingStop = () => ({
    type: types.API_LOADING_STOP
});
const apiLoadingSuccess = (data) => ({
    type: types.API_SUCCESS,
    payload: data
});


const apiLoadingFailer = (message) => ({
    type: types.API_FAILED,
    payload: message
});






