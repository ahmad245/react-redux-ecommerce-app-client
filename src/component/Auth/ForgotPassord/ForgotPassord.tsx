import React, { useState, useEffect } from 'react'
import { FormContainer, Form } from '../../../shared/Form';
import { Fieldset } from '../../../shared/Fields';
import { Label } from '../../../shared/Label';
import { Input } from '../../../shared/Input';
import { ButtonValid } from '../../../shared/Buttons';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { toast } from 'react-toastify';
import { forgotPassword } from '..';

const ForgotPassword=(props:any)=>{
    const [emailState,setEmailState]=useState('');


    const {email} = useTypedSelector((state) => state.authReducer)

    useEffect(() => {
         if(email || email !== ''){
             props.history.push('/')
         }
        
    }, [])

    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        forgotPassword(emailState).then(()=>{
            setEmailState('');
            toast.info('please check your email')
        }).catch((error)=>toast.error(error.message))
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
            
           
            
            </Fieldset>
            <ButtonValid>Valide</ButtonValid>
        
        </Form>
            
        </FormContainer>
        </>
    )
}
export default ForgotPassword;