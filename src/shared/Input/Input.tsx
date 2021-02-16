import React, { useState } from 'react'
import { InputStype } from './Input.element';
interface PropsInput{
    disabled?:boolean;
    type?:string;
    value?:any;
    name?:string;
    change?:(e:any)=>void;
    placeholder?:string;

}
export default  (props:PropsInput)=> {
    
    
    const [value,setValue]=useState('');
    return (
        <InputStype placeholder={props.placeholder}  disabled={props.disabled} type={props.type ? props.type :'text'} value={props.value} onChange={(e)=> props.change && props.change(e.target.value)} name={props.name}  />
    )
};
