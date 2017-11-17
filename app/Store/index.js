import {
  createStore,
  applyMiddleware, 
  combineReducers 
} from 'redux'; 
    
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'
  
import SampleReducer from './Sample'
  
const AppReducers = combineReducers({
  SampleReducer,
})

export default createStore(AppReducers, applyMiddleware(thunk, logger));
