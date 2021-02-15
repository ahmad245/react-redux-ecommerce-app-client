
import React, {  useEffect } from 'react'

import { useTypedSelector, useActionsProduct } from '../../../../hooks';
const ProductShow=(props:any)=>{
    const {getProductBySlug} =useActionsProduct();
    const { productReducer } = useTypedSelector(state => state);
  
    useEffect(()=>{
        getProductBySlug(props.match.params.slug)
    },[])
    const renderProduct=()=>{
        const product=productReducer.data[props.match.params.id]
        if(product._id){
            return <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>{product.category.name}</p>
            <p>{product.subs.map((el)=><span>{el.name}</span>)}</p>
        </div>
        }
        return <div>loading</div>
        
    }
    return (
        <div>
            {renderProduct()}
        </div>
    )
}

export default ProductShow;