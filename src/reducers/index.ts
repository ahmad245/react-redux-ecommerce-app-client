import { combineReducers } from 'redux';
import { authReducer } from '../component/Auth/reducer';

//import authReducer from './authReducer';

const reducers = combineReducers({
    authReducer: authReducer,
});

export default reducers;

export type RootState=ReturnType<typeof reducers>;