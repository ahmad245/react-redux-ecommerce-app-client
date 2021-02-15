import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector, useActionsProduct } from '../../../../hooks';
import { ProductDelete } from '../ProductDelete';
const ProductList=(props:any)=>{

    const { productReducer } = useTypedSelector(state => state);
    const { getAllProduct} = useActionsProduct()
    const [slug, setSlug] = useState('');
    useEffect(()=>{
        getAllProduct()
    },[])

    const openDeletModal=(slug:string='')=>{
        if(slug=='') return
          setSlug(slug)
    }
    const renderProductList=()=>{
            const productList=Object.values(productReducer.data)
          
            
            if(productList.length>0){
                return productList.map((el)=>{
                 return   <div key={el._id}>
                        <p>{el.title}</p>
                        <Link to={`/admin/dashboard/product/update/${el._id}/${el.slug}`} >Update</Link>
                        <Link to={`/admin/dashboard/product/show/${el._id}/${el.slug}`}>Show</Link>
                        <button onClick={ (e)=> openDeletModal(el.slug)}>Delete</button>

                    </div>
                })
            }
            return <div>loading...</div>
    }
    return (
        <div>
              {renderProductList()}
              {slug !== '' && <ProductDelete setSlug={setSlug}  slug={slug} />}
        </div>
    )
}

export default ProductList;