import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './PostlistScreenStyle'
import {getPostList} from "../../../store/postlist";
import connect from "react-redux/es/connect/connect";
import _ from "lodash";
import plusButton from '../../../assets/plus.png';

class PostlistScreen extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPostList()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>{'POST'}</Text>
                <TouchableOpacity style={styles.image}
                                  onPress={() => {
                                      this.props.navigation.navigate('AddPostScreen')
                                  }}>

                    <Image source={plusButton}/>
                </TouchableOpacity>
                <View style={styles.line}/>

                <View style={styles.progressContainer}>
                    {this.props.isLoading &&

                    <ActivityIndicator size="large" style={styles.progressView}/>

                    }
                </View>
                <ScrollView>
                    {_.map(this.props.data, (item, index) => {
                        return (
                            <View style={styles.cardView}>
                                <Text style={styles.text}>{'userId : ' + item.userId}</Text>
                                <Text style={styles.text}>{'Id : ' + item.id}</Text>
                                <Text style={styles.text}>{'title : ' + item.title}</Text>

                            </View>
                        );
                    })}
                </ScrollView>

            </View>

        );
    }
}

const mapActionCreators = {
    getPostList
};

const mapStateToProps = state => {
    return {
        isLoading: state.postlist.loading,
        data: state.postlist.data,
        message: state.postlist.message
    };
};
export default connect(mapStateToProps, mapActionCreators)(PostlistScreen);
