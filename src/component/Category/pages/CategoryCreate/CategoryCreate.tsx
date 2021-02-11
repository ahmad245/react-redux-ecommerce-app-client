import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useActions, useActionsCategory, useTypedSelector } from '../../../../hooks';
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
        </div>
    );

}

export default CategoryCreate;