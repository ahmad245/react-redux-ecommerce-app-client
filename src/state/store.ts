import reducers from "../reducers";
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
const composeEnhancers= (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;; 

//store={createStore(reducers,composeEnhancers(applyMiddleware(thunk)))}

export const stroe=createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)));