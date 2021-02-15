import { Dispatch } from "redux";
import { ActionProduct } from "../action-types";
import { IProduct, create,update,remove,getAll,getBySlug } from "../../../apis/product";
import { ActionTypeProduct } from "../actions";


export const createProduct=(product:IProduct,token:string)=>async(dispatch:Dispatch<ActionProduct>)=>{
  
    dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY})

    try {
        const {data}=await create(product,token)
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_CREATE,payload:data})
    } catch (error) {
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR,payload:error.message})
    }
    
}


export const updateProduct=(product:IProduct,slug:string,token:string)=>async(dispatch:Dispatch<ActionProduct>)=>{
    dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY})
    try {
        const {data}=await update(product,slug,token)
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_UPDATE,payload:data})
    } catch (error) {
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const removeProduct=(slug:string,token:string)=>async(dispatch:Dispatch<ActionProduct>)=>{
    dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY})
    try {
        const {data}=await remove(slug,token)
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_DELETE,payload:data})
    } catch (error) {
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const getAllProduct=()=>async(dispatch:Dispatch<ActionProduct>)=>{
    dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY});
    try {
        const {data}=await getAll()
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_GETALL,payload:data})
    } catch (error) {
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR,payload:error.message})
  
    }
}
export const getProductBySlug=(slug:string)=>async(dispatch:Dispatch<ActionProduct>)=>{
    dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY});
    try {
        const {data}=await getBySlug(slug)
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_GETBYID,payload:data})
    } catch (error) {
        dispatch({type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR,payload:error.message})
  
    }
}