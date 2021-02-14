import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { useActions,useActionsSubCategory ,useActionsCategory, useTypedSelector } from '../../../../hooks';
import _ from 'lodash';
import { SubCategoryForm } from '..';


const  SubCategoryUpdate=(props:any)=>{
    const {authReducer,subCategoryReducer} =useTypedSelector(state=>state)
    const {updateSubCategory,getSubCategoryBySlug} =useActionsSubCategory();
   
    useEffect(() => {
        getSubCategoryBySlug(props.match.params.slug)
        
    }, [])
    const onSubmit=async(name:string,parent:string)=>{
      await  updateSubCategory({name:name,parent:parent},_.pick(subCategoryReducer.data[props.match.params.id],'slug').slug || '' ,authReducer.token)
       props.history.push('/admin/dashboard/subCategory/create')
    }

    const initialValue=()=>{
        if(subCategoryReducer.data && props.match.params.slug){    
         return   _.pick(subCategoryReducer.data[props.match.params.id],'name','parent')
        }
    }
    const renderForm=()=>{
        if(subCategoryReducer.data[props.match.params.id]){
            return (<SubCategoryForm onSubmit={onSubmit} initialValue={initialValue()}/> )
        }
        else return <div>loading2</div>
    }
    return (
        <div>{renderForm()}</div>
       
    );
}

export default SubCategoryUpdate;