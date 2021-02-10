import React, { useEffect } from 'react'
import { useActions } from '../../../hooks/useActions';

const Logout=(props:any)=>{
    const {logout} =useActions();
    useEffect(() => {
        const logoutSt=async()=>{
            await logout();
            props.history.push('/login')
        }
       logoutSt()
        
    }, [])

    return(<>
    </>)
}

export default Logout;