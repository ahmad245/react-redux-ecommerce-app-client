import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useTypedSelector,useActionsCategory} from '../../../../hooks';
import { Modal } from '../../../../shared/Modal';

const CategoryDelete=(props:any)=>{

    const {removeCategory,getCategoryBySlug} =useActionsCategory();
    const { categoryReducer,authReducer } = useTypedSelector(state => state)
    useEffect(()=>{

       // getCategoryBySlug(props.match.params.slug)
        getCategoryBySlug(props.slug)
    },[])


    
    const  renderActions=()=>{
        const { slug } = props.match.params;
        return (
          <React.Fragment>
            <button
              onClick={() => removeCategory(slug,authReducer.token)}
              className="ui button negative"
            >
              Delete
            </button>
            <Link to="/" className="ui button">
              Cancel
            </Link>
          </React.Fragment>
        );
    }
  const renderContent=() =>{
    if (!categoryReducer.data[props.slug]) {
    //    if (!categoryReducer.data[props.match.params.slug]) {
          return 'Are you sure you want to delete this stream?';
        }
    
        return `Are you sure you want to delete the stream with title: ${
      //    categoryReducer.data[props.match.params.slug].name
          categoryReducer.data[props.slug].name
        }`;
      }
    return (
        <Modal 
        
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => props.history.push('/')}

        />
    );

}

export default CategoryDelete;