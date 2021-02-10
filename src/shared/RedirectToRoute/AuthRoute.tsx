import React from 'react'
import { Route } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LoadingRoute } from '../LoadingRoute';

const AuthRoute=({children,...props}:any)=>{
    const {token} = useTypedSelector((state) => state.authReducer)
    return  token ? ( <Route {...props} render={()=>children} /> ) :
      (<LoadingRoute />)
}
export default AuthRoute;
