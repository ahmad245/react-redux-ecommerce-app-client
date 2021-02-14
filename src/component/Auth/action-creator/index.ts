import { auth } from "../../../firebase"
import { Dispatch } from "redux";
import { 
    onAuthChangeRepository, 
    loginRepository, 
    loginWithGoogleRepository, 
    signInWithEmailLink, 
    ActionAuth,
    ActionAutType} 
    from "..";
import { createUser, getCurrentUser } from "../repository";


export const authChange=()=>(dispatch:Dispatch<ActionAuth>)=>{
    onAuthChangeRepository(populateOnChange,dispatch);
}

export const logout=()=>async(dispatch:Dispatch<ActionAuth>)=>{
    try {
        dispatch({type:ActionAutType.LOGOUT})
    } catch (error) {
         
         
    }
   await auth.signOut()
    
     
}

export const login=(email:string,password:string)=>async(dispatch:Dispatch<ActionAuth>)=>{
    
    dispatch({type:ActionAutType.LOGIN_REPOSITORY})
    try {
        const userLogin=await  loginRepository({email,password});
        await populate(userLogin,dispatch);
    } catch (error) {
        dispatch({type:ActionAutType.LOGIN_REPOSITORY_ERROR,payload:error.message})
    }
 
}

export const  loginWithGoogle=()=>async(dispatch:Dispatch<ActionAuth>)=>{
    dispatch({type:ActionAutType.LOGIN_REPOSITORY})
    try {
        const user= await  loginWithGoogleRepository();
      await populate(user,dispatch);
    } catch (error) {
        dispatch({type:ActionAutType.LOGIN_REPOSITORY_ERROR,payload:error.message})
    }
    
}

export const  register=(email:string,password:string)=>async(dispatch:Dispatch<ActionAuth>)=>{
   
    dispatch({type:ActionAutType.REGISTER_REPOSITORY});
    try {
        const user= await signInWithEmailLink(email,window.location.href,password)
        if(user && user.email){
            const {token}=await user.getIdTokenResult()
            dispatch({type:ActionAutType.REGISTER_REPOSITORY_SUCCESS,payload:{email:user.email,token:token}})
        }
    } catch (error) {
        dispatch({type:ActionAutType.REGISTER_REPOSITORY_ERROR,payload:error.message});
    }
    
}


const populate=async(userLogin:firebase.default.User | null,dispatch:Dispatch<ActionAuth>):Promise<void>=>{
    console.log('populate');
    
    if(userLogin && userLogin.email) {
        const {token}=await userLogin.getIdTokenResult();
        const user=await createUser(token);
          
        dispatch({
            type:ActionAutType.LOGIN_REPOSITORY_SUCCESS,
            payload:{
                email:user.data.email,
                name:user.data.name,
                role:user.data.role,
                _id:user.data._id,
                token:token
            }
        })
    }

}

const populateOnChange=async(userLogin:firebase.default.User | null,dispatch:Dispatch<ActionAuth>):Promise<void>=>{
    if(userLogin && userLogin.email) {
        const {token}=await userLogin.getIdTokenResult();
        const user=await getCurrentUser(token);
          
        dispatch({
            type:ActionAutType.LOGIN_REPOSITORY_SUCCESS,
            payload:{
                email:user.data.email,
                name:user.data.name,
                role:user.data.role,
                _id:user.data._id,
                token:token
            }
        })
    }

}