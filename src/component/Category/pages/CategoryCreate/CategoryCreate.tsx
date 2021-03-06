import React, {  memo } from 'react';

// import { toast } from 'react-toastify';
import { CategoryList } from '..';
import {  useActionsCategory, useTypedSelector } from '../../../../hooks';
import { CategoryForm } from '../CategoryForm';



const CategoryCreate = () => {
    const { createCategory } = useActionsCategory()
    const { authReducer } = useTypedSelector(state => state)
    const onSubmit = (formValue: string) => {

        createCategory(formValue, authReducer.token)
    }
  
    
    return (
        <div>
            <CategoryForm onSubmit={onSubmit} />
            <CategoryList />
        </div>
    );

}

export default memo(CategoryCreate);