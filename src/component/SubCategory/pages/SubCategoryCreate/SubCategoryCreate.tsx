import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import { useActions,useActionsSubCategory ,useActionsCategory, useTypedSelector } from '../../../../hooks';
import { SubCategoryForm, SubCategoryList } from '..';



const  SubCategoryCreate=(props:any)=>{
    const { authReducer } = useTypedSelector(state => state)
    const { createSubCategory } = useActionsSubCategory()
    const onSubmit = (formValue: string,parent:string) => {

        createSubCategory({name:formValue,parent:parent}, authReducer.token)
    }
    return(
        <div>
            <SubCategoryForm  onSubmit={onSubmit}/>
            <SubCategoryList />
        </div>
    )
}

export default SubCategoryCreate;