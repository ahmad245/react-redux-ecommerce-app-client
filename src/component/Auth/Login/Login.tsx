import React, { useState } from 'react'
import { FormContainer, Form } from '../../../shared/Form';
import { Fieldset } from '../../../shared/Fields';
import { Label } from '../../../shared/Label';
import { Input } from '../../../shared/Input';
import { ButtonValid } from '../../../shared/Buttons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login=()=>{
    const [emailState,setEmailState]=useState('');
    const [password,setPassword]=useState('');
    const {login} =useActions();
    const {email,token,error,loading} = useTypedSelector((state) => state.authReducer)

    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       
     
        if(!emailState || !password) {
            toast.error('you must to have email and password');
            return;
        }
         try {
        
          login(emailState,password)

            toast.success('you are success register')
         
         } catch (error) {
             toast.error(error)
         }   

    
        
       
       setPassword('');
        
    }
    return (
        <>
 <FormContainer>
  <Form onSubmit={onSubmit}>
            <Fieldset>
            <div className='field'>
                <Label className="medium">
                    Email
                </Label>
                </div>
                <div className='field'>
                 <Input  type="email" name="title" value={emailState} change={setEmailState} />
                </div>
            
            <div className='field'>
                <Label className="medium">
                    Password
                </Label>
                </div>
                <div className='field'>
                 <Input  type="password" name="password" value={password} change={setPassword} />
                </div>
            
            </Fieldset>
            <ButtonValid>Valide</ButtonValid>
        
        </Form>
            <Link to="/forgotPassword" > Forgot password </Link>
        </FormContainer>
        </>
    )
}
export default Login;