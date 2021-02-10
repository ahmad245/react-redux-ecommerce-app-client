import { Dispatch } from "redux";
import { ActionCategory } from "../action-types";
import { ActionCategoryType } from "../actions";
import { create } from "../../../apis/category";

export const createCategory=(name:string,token:string)=>async(dispatch:Dispatch<ActionCategory>)=>{

    dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY})

    try {
         const category=await create(name,token)
         dispatch({type:ActionCategoryType.CATEGORY_REPOSITORY_CREATE,payload:category.data})
    } catch (error) {
        
    }
}