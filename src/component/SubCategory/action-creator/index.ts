
import { Dispatch } from "redux";
import { ActionSubCategory } from "../action-types";
import { ActionSubCategoryType,SubCategory } from "../actions";
import { create,update,getAll,getBySlug,remove } from "../../../apis/subCategory";

export const createCategory=(sub:SubCategory,token:string)=>async(dispatch:Dispatch<ActionSubCategory>)=>{

    dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY})

    try {
         const subCategory=await create(sub,token)
         dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_CREATE,payload:subCategory.data})
    } catch (error) {
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR,payload:error.message})
    }
}

export const updateCategory=(sub:SubCategory,slug:string,token:string)=>async(dispatch:Dispatch<ActionSubCategory>)=>{
    dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY})
    try {
        const {data}=await update(sub,slug,token)
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_UPDATE,payload:data})
    } catch (error) {
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const removeCategory=(slug:string,token:string)=>async(dispatch:Dispatch<ActionSubCategory>)=>{
    dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY})
    try {
        const {data}=await remove(slug,token)
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_DELETE,payload:data})
    } catch (error) {
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const getAllCategory=()=>async(dispatch:Dispatch<ActionSubCategory>)=>{
    dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY});
    try {
        const {data}=await getAll()
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETALL,payload:data})
    } catch (error) {
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}
export const getCategoryBySlug=(slug:string)=>async(dispatch:Dispatch<ActionSubCategory>)=>{
    dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY});
    try {
        const {data}=await getBySlug(slug)
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETBYID,payload:data})
    } catch (error) {
        dispatch({type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}