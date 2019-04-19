import {Alert, NetInfo} from "react-native";

import {ADD_POST, BASE_URL, GET_POST} from '../static'


const api = {
    noInternet: function () {
        Alert.alert("Please connect to internet");
    },
    ApiCall: function async() {
        //Check for Internet Connection
        NetInfo.isConnected.fetch().then(isConnected => {
            if (!isConnected) {
                this.noInternet();
                return;
            }
        });

        return fetch(BASE_URL + GET_POST, {
            method: 'GET'

        },)
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log("onresponse=>", JSON.stringify(response));
                return response;
            }).catch(() => {
                console.log("onError=>", "Something went wrong !!");
            });
    },
    ApiPostCall: function async(data) {

        NetInfo.isConnected.fetch().then(isConnected => {
            if (!isConnected) {
                this.noInternet();
                return;
            }
        });
        console.log("apiresult1", BASE_URL + ADD_POST);
        console.log("apiresult2", JSON.stringify(data));

        return fetch(BASE_URL + ADD_POST, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }, body: JSON.stringify(data)
        })
            .then(response => {

                return response.json();
            })
            .then(response => {
                console.log("apiresultx", JSON.stringify(response));
                return response;
            }).catch(() => {
                console.log("OnError", "Something went wrong !!");
            });
    }
};

export default api;
