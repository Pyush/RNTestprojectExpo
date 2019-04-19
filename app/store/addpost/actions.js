import * as types from './actionTypes'
import webservices from '../../webservice/webservices'
import {Alert} from "react-native";

export const createNewPost = (data) => {
    return async (dispatch) => {
        dispatch(apiLoading())
        var result = await webservices.ApiPostCall(data);
        dispatch(apiLoadingSuccess(result));
        Alert.alert("Sent", "Post Sent successfully")
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






