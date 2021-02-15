import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { FormContainer, Form } from '../../../shared/Form';
import { Fieldset } from '../../../shared/Fields';
import { Label } from '../../../shared/Label';
import { Input } from '../../../shared/Input';
import { ButtonValid } from '../../../shared/Buttons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';



export default (props:any) => {
    const [emailState,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {register} =useActions();
    const {email,token,error,loading} = useTypedSelector((state) => state.authReducer)
    useEffect(() => {
        
       const emailUser= window.localStorage.getItem('emailFirebase');
       if(emailUser) {setEmail(emailUser);}
       
        
    }, [emailState])
    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const emailUser= window.localStorage.getItem('emailFirebase');
        console.log(password);
        if(!emailUser || !password) {
            toast.error('you must to have email and password');
            return;
        }
         try {
        
          register(emailState,password)

            toast.success('you are success register')
         
         } catch (error) {
             toast.error(error)
         }   

    
        
       
       setPassword('');
        
    }
    return (
        <FormContainer>
  <Form onSubmit={onSubmit}>
            <Fieldset>
            <div className='field'>
                <Label className="medium">
                    Email
                </Label>
                </div>
                <div className='field'>
                 <Input  type="email" name="title" value={emailState} disabled />
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
            
        </FormContainer>
      
    )
}
