import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import styles from './AddPostScreenStyle'
import {createNewPost} from "../../../store/addpost";
import connect from "react-redux/es/connect/connect";
import backButton from '../../../assets/back_button.png';

class AddPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    _sendPost() {

        if (this.state.message === '') {
            Alert.alert("Empty", "Feild can not be blank")
            return;
        } else {
            const request = {
                title: this.state.message,
                body: 'Body',
                userId: 1
            };
            this.props.createNewPost(request)
            this.setState({message: ''})

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>{'Create Post screen'}</Text>
                <TouchableOpacity style={styles.image}
                                  onPress={() => {
                                      this.props.navigation.navigate('PostListScreen')
                                  }}>

                    <Image source={backButton}/>
                </TouchableOpacity>
                <View style={styles.line}/>
                <View style={styles.progressContainer}>
                    {this.props.isLoading &&
                    <ActivityIndicator size="large" style={styles.progressView}/>
                    }
                </View>

                <View style={styles.bottomiew}>
                    <View style={styles.innerChat}>
                        <TextInput
                            style={styles.chatInput}
                            placeholder="Type here.."
                            value={this.state.message} onChangeText={(text) => this.setState({message: text})}>
                        </TextInput>
                        <TouchableOpacity
                            onPress={() => {
                                this._sendPost()
                            }}>
                            <Text style={{padding: 15, color: '#3bb7ff'}}>{'Send'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const mapActionCreators = {
    createNewPost
};

const mapStateToProps = state => {

    return {
        isLoading: state.addpost.loading,
        data: state.addpost.data,
        message: state.addpost.message
    };
};
export default connect(mapStateToProps, mapActionCreators)(AddPostScreen);
