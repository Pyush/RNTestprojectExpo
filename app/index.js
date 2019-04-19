import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from './store'
import Navigation from './Navigation'

const store = configureStore();
const App = () =>
    <Provider store={store}>
        <Navigation/>
    </Provider>

export default App
