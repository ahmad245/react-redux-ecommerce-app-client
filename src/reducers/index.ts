import { combineReducers } from 'redux';
import { authReducer } from '../component/Auth/reducer';
import { categoryReducer } from '../component/Category/reducer';
import { subCategoryReducer } from '../component/SubCategory/reducer';
import { productReducer } from '../component/Product/reducer';

//import authReducer from './authReducer';

const reducers = combineReducers({
    authReducer: authReducer,
    categoryReducer:categoryReducer,
    subCategoryReducer:subCategoryReducer,
    productReducer:productReducer
});

export default reducers;

export type RootState=ReturnType<typeof reducers>;