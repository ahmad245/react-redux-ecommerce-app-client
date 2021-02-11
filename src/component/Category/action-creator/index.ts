import { Dispatch } from "redux";
import { ActionCategory } from "../action-types";
import { ActionCategoryType } from "../actions";
import { create,update,getAll,getBySlug,remove } from "../../../apis/category";

export const createCategory=(name:string,token:string)=>async(dispatch:Dispatch<ActionCategory>)=>{

    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY})

    try {
         const category=await create(name,token)
         dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_CREATE,payload:category.data})
    } catch (error) {
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR,payload:error.message})
    }
}

export const updateCategory=(name:string,slug:string,token:string)=>async(dispatch:Dispatch<ActionCategory>)=>{
    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY})
    try {
        const {data}=await update(name,slug,token)
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_UPDATE,payload:data})
    } catch (error) {
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const removeCategory=(slug:string,token:string)=>async(dispatch:Dispatch<ActionCategory>)=>{
    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY})
    try {
        const {data}=await remove(slug,token)
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_DELETE,payload:data})
    } catch (error) {
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}

export const getAllCategory=()=>async(dispatch:Dispatch<ActionCategory>)=>{
    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY});
    try {
        const {data}=await getAll()
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_GETALL,payload:data})
    } catch (error) {
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}
export const getCategoryBySlug=(slug:string)=>async(dispatch:Dispatch<ActionCategory>)=>{
    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY});
    try {
        const {data}=await getBySlug(slug)
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_GETBYID,payload:data})
    } catch (error) {
        dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR,payload:error.message})
  
    }
}