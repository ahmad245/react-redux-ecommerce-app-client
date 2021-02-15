import React, { useEffect } from 'react';
import _ from 'lodash';
//import { toast } from 'react-toastify';
import { useTypedSelector,useActionsCategory} from '../../../../hooks';
import { CategoryForm } from '../CategoryForm';


const CategoryUpdate=(props:any)=>{
    const {authReducer,categoryReducer} =useTypedSelector(state=>state)
    const {updateCategory,getCategoryBySlug} =useActionsCategory();
    useEffect(() => {
         getCategoryBySlug(props.match.params.slug)
        
    }, [])
    const onSubmit=async(name:string)=>{
      await  updateCategory(name,_.pick(categoryReducer.data[props.match.params.id],'slug').slug || '' ,authReducer.token)
       props.history.push('/admin/dashboard/category/create')
    }

    const initialValue=()=>{
        if(categoryReducer.data && props.match.params.slug){    
         return   _.pick(categoryReducer.data[props.match.params.id],'name')
        }
    }
    const renderForm=()=>{
        if(categoryReducer.data[props.match.params.id]){
            return (<CategoryForm onSubmit={onSubmit} initialValue={initialValue()}/> )
        }
        else return <div>loading</div>
    }
    return (
        <div>{renderForm()}</div>
       
    );

}

export default CategoryUpdate;