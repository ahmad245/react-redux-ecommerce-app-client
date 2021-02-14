import { Dispatch } from "redux";
import { auth, googleAuthProvider } from "../../../firebase";
import { User } from "../actions";
import axios from 'axios';

export const  onAuthChangeRepository=((cb:(user:firebase.default.User | null,dispatch:Dispatch)=>Promise<void>,dipatch:Dispatch)=>{

        auth.onAuthStateChanged(async(user)=>{
          await  cb(user,dipatch)
        })
       

})

export const loginRepository=async({email,password}:User):Promise<firebase.default.User | null> =>{
    const {user}=await auth.signInWithEmailAndPassword(email,password);
    return user;
}

export const loginWithGoogleRepository=async()=>{
    const {user}=await auth.signInWithPopup(googleAuthProvider);
    return user;
}

export const signInWithEmailLink=async(email:string,link:string,password:string): Promise<firebase.default.User | null>=>{
  const {user}=  await auth.signInWithEmailLink(email,link);
  if(user?.emailVerified){
    window.localStorage.removeItem('emailFirebase');

    let currentUser=auth.currentUser;
    await  currentUser?.updatePassword(password);
    return user;

  }
  return null;
}

export const sendSignInLinkToEmail=async(email:string):Promise<void>=>{
    const config={
        url:process.env.REACT_APP_REGISTER_REDIRECT_URL||'',
        handleCodeInApp:true
    }
   await auth.sendSignInLinkToEmail(email,config)
}

export const forgotPassword=async(email:string)=>{
    const config={
        url:process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL||'',
        handleCodeInApp:true
    }
    await auth.sendPasswordResetEmail(email,config);
}

export const createUser=async(authtoken:string)=>{
      const user=await axios.post(`${process.env.REACT_APP_API}/create-or-update-user`,{},{
          headers:{
           authtoken
          }
      });
      console.log('api',user);
      
      return user;
}

export const getCurrentUser=async(authtoken:string)=>{
    const user=await axios.post(`${process.env.REACT_APP_API}/current-user`,{},{
        headers:{
         authtoken
        }
    });
    return user;
}
export const getCurrentAdmin=async(authtoken:string)=>{
    const user=await axios.post(`${process.env.REACT_APP_API}/current-admin`,{},{
        headers:{
         authtoken
        }
    });
    return user;
}
