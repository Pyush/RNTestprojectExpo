import React from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',

        },
        progressContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
        },
        cardView: {
            padding: 10,
            margin: 5,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',
            borderWidth: 0.5,
            elevation: 5

        },
        shadow: {
            backgroundColor: '#2E9298',
            borderRadius: 10,
            padding: 10,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
        image: {
            position: 'absolute',
            right: 15,
            top: 15
        },
        textTitle: {
            color: '#000000',
            fontWeight:
                'bold',
            textAlign:
                'center',
            padding:
                15
        }
        ,
        text: {
            color: '#000000',
            fontWeight:
                'bold',
            padding:
                5
        }, progressView: {
            height: 100, width: 100, marginTop: 100
        },line:{backgroundColor: '#d0d0d0', height: 1}
    })
;


export default styles;
