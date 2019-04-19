import {combineReducers} from 'redux'
import postlist from './postlist'
import addpost from './addpost'

export default combineReducers({
    postlist,
    addpost
})

