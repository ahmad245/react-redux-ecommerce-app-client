import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useTypedSelector,useActionsCategory} from '../../../../hooks';
import { Modal } from '../../../../shared/Modal';

const CategoryDelete=(props:any)=>{

    const {removeCategory,getCategoryBySlug} =useActionsCategory();
    const { categoryReducer,authReducer } = useTypedSelector(state => state);
    const history=useHistory();
    useEffect(()=>{
          console.log('delete');

          return ()=>{
           // props.setSlug('')
          }
          
       // getCategoryBySlug(props.match.params.slug)
      //  getCategoryBySlug(props.slug)
    },[])

    const handleRemoveCategory=async(slug:string)=>{
    await  removeCategory(slug,authReducer.token)
    props.setSlug('');
    }

    
    const  renderActions=()=>{
       // const { slug } = props.match.params;
        const { slug } = props;
        return (
          <React.Fragment>
            <button
              onClick={() => handleRemoveCategory(slug)}
              className="ui button negative"
            >
              Delete
            </button>
            <button onClick={()=>props.setSlug('')} className="ui button">
              Cancel
            </button>
          </React.Fragment>
        );
    }
  const renderContent=() =>{
    if (!props.slug) {
    //    if (!categoryReducer.data[props.match.params.slug]) {
          return 'Are you sure you want to delete this Category?';
        }
    
        return `Are you sure you want to delete the Category with title: ${
      //    categoryReducer.data[props.match.params.slug].name
          props.slug.split('-')[0] + ' ' +  props.slug.split('-')[1]
        }`;
      }
     const  onDismiss=()=>{
      props.setSlug('');
      //history.push('/admin/dashboard/category/create')
     }
    return (
        <Modal 
        
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={onDismiss}

        />
    );

}

export default CategoryDelete;