import {ActivityIndicator, AppRegistry, View, Text} from "react-native";
import React, {Component} from "react";
import styles from './SplashScreenStyle'


export default class SplshScreen extends Component {

    componentWillMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate('PostListScreen');
        }, 2000);


    }

    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container}>
                    <Text style={styles.text}>{'WELCOME'}</Text>
                    <Text style={styles.text}>{'JsonPlaceholder'}</Text>
                    <ActivityIndicator size="large" style={styles.progressView}/>

                    <Text style={styles.createdBy}>{'Created by Piyush Patel'}</Text>
                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('SplshScreen', function () {
    return SplshScreen;
});


