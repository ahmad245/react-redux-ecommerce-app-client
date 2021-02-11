import { combineReducers } from 'redux';
import { authReducer } from '../component/Auth/reducer';
import { categoryReducer } from '../component/Category/reducer';

//import authReducer from './authReducer';

const reducers = combineReducers({
    authReducer: authReducer,
    categoryReducer:categoryReducer
});

export default reducers;

export type RootState=ReturnType<typeof reducers>;