import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LoadingRoute } from '../LoadingRoute';
import { getCurrentAdmin } from '../../component/Auth';

const AdminRoute=({children,...props}:any)=>{
    const {token} = useTypedSelector((state) => state.authReducer);
     const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
        if(token){
            const checkAdmin=async()=>{
                const user=await getCurrentAdmin(token)
                 if(user){
                     setisAdmin(true)
                 }
                }
                checkAdmin();
        }
        
       
    
    }, [token])


    return  isAdmin ? ( <Route {...props}  /> ) :
      (<h2>you are not admin</h2>)
}
export default AdminRoute;
