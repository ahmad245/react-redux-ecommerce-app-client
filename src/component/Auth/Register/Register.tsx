import React, { useState } from 'react'
import { Input } from '../../../shared/Input'
import { Form, FormContainer } from '../../../shared/Form';
import { Fieldset } from '../../../shared/Fields';
import { Label } from '../../../shared/Label';
import { ButtonValid } from '../../../shared/Buttons';
//import {auth} from '../../../firebase';

import {toast} from 'react-toastify';
import { sendSignInLinkToEmail } from '..';
const Register= (props:any) => {
    
    const [email,setEmail]=useState('');
    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    //     const config={
    //         url:process.env.REACT_APP_REGISTER_REDIRECT_URL||'',
    //         handleCodeInApp:true
    //     }
    //    await auth.sendSignInLinkToEmail(email,config)
        await sendSignInLinkToEmail(email)
       toast.success(`Email is sent to ${email} . Click the linke to complite registiration`);
       window.localStorage.setItem('emailFirebase',email);
       setEmail('');
        
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
                 <Input  type="email" name="title" value={email} change={setEmail} />
                </div>
            
            </Fieldset>
            <ButtonValid>Valide</ButtonValid>
        
        </Form>
            
        </FormContainer>
      
    )
}
export default Register;