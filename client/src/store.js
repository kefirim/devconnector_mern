import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer'
import profileReducer from './reducers/profileReducer'
import postReducer from './reducers/postReducer'

//postReducer


//import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    alert:alertReducer,
    auth:authReducer,
    profile:profileReducer,
    post:postReducer
   
   
})





const initialState = {
 
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store