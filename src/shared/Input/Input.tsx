import React, { useState } from 'react'
import { InputStype } from './Input.element';

export default  (props:any)=> {
    
    
    const [value,setValue]=useState('');
    return (
        <InputStype  disabled={props.disabled} type={props.type ? props.type :'text'} value={props.value} onChange={(e)=> props.change(e.target.value)} name={props.name}  />
    )
};
