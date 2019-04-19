import React from 'react'
import {createStackNavigator} from "react-navigation";
import PostListScreen from './Root/Screens/PostListScreen'
import SplshScreen from "./Root/Screens/SplashScreen";
import AddPostScreen from "./Root/Screens/AddPostScreen";

console.disableYellowBox = true;

const StackScreen = createStackNavigator({
    SplshScreen: {screen: SplshScreen},
    PostListScreen: {screen: PostListScreen},
    AddPostScreen: {screen: AddPostScreen},
}, {
    headerMode: 'none'
});

export default StackScreen;
