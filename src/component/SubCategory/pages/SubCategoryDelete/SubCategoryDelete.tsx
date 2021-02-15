import React, {  useEffect } from 'react';

//import { toast } from 'react-toastify';

import { useActionsSubCategory , useTypedSelector } from '../../../../hooks';
import { Modal } from '../../../../shared/Modal';
import { useHistory } from 'react-router-dom';


const  SubCategoryDelete=(props:any)=>{
    
    const {removeSubCategory,getSubCategoryBySlug} =useActionsSubCategory();
    const { authReducer } = useTypedSelector(state => state);
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
    await  removeSubCategory(slug,authReducer.token)
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
          return 'Are you sure you want to delete this Sub Category?';
        }
        return `Are you sure you want to delete the Sub Category with title: ${
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

export default SubCategoryDelete;