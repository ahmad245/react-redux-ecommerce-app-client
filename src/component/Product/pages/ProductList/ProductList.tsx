import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector, useActionsProduct } from '../../../../hooks';
const ProductList=(props:any)=>{

    const { categoryReducer } = useTypedSelector(state => state);
    const { getAllProduct} = useActionsProduct()
    useEffect(()=>{
        getAllProduct()
    },[])
    const renderProductList=()=>{
            const productList=Object.values(categoryReducer.data)
            if(productList.length>0){
                return productList.map((el)=>{
                    <div key={el._id}>
                        <p>{el.name}</p>
                        <Link to={`/admin/dashboard/product/update/${el._id}/${el.slug}`} >Update</Link>
                        <Link to={`/admin/dashboard/product/show/${el._id}/${el.slug}`}>Show</Link>
                        <button>Delete</button>

                    </div>
                })
            }
            return <div>loading...</div>
    }
    return (
        <div>
              {renderProductList()}
        </div>
    )
}

export default ProductList;