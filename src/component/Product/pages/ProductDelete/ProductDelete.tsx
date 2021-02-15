import React from 'react'
import {  useTypedSelector, useActionsProduct } from '../../../../hooks';
import { Modal } from '../../../../shared/Modal';
const ProductDelete=(props:any)=>{
    const {removeProduct,getProductBySlug} =useActionsProduct();
    const { authReducer } = useTypedSelector(state => state);
  

    const handleRemoveProduct=async(slug:string)=>{
    await  removeProduct(slug,authReducer.token)
    props.setSlug('');
    }
    
    const  renderActions=()=>{
       // const { slug } = props.match.params;
        const { slug } = props;
        return (
          <React.Fragment>
            <button
              onClick={() => handleRemoveProduct(slug)}
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
          return 'Are you sure you want to delete this Product?';
        }
        return `Are you sure you want to delete the Product with title: ${
          props.slug.split('-')[0] + ' ' +  props.slug.split('-')[1]
        }`;
      }
     const  onDismiss=()=>{
      props.setSlug('');
     }
    return (
        <Modal 
        
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={onDismiss}

        />
    )
}

export default ProductDelete;