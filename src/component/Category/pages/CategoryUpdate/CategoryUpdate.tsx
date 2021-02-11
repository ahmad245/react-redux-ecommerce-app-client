import React, { useState,useEffect } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { useActions ,useTypedSelector,useActionsCategory} from '../../../../hooks';
import { CategoryForm } from '../CategoryForm';


const CategoryUpdate=(props:any)=>{
    const {authReducer,categoryReducer} =useTypedSelector(state=>state)
    const {updateCategory} =useActionsCategory();
    const onSubmit=(name:string)=>{
        updateCategory(name,props.match.params.slug,authReducer.token)
    }

    const initialValue=()=>{
        if(categoryReducer.data && props.match.params.slug){
         return   _.pick(categoryReducer.data[props.match.params.slug],'name')
        }
    }
    return (
        <CategoryForm onSubmit={onSubmit} initialValue={initialValue()}/>
    );

}

export default CategoryUpdate;