import { ActionSubCategory } from "../action-types";
import { ActionSubCategoryType } from "../actions";
import _ from 'lodash';
export interface RepositoryState {
    loading: boolean;
    data:{  [key:string]:{_id:string;name:string;slug?:string,parent?:string} };
    error?:string;

}

const INITIALSTATAUTH = {
    loading: false,
    data:{
        '':{_id:'',name:'',slug:'',parent:''}
    },
    error:''
}
export default (state:RepositoryState=INITIALSTATAUTH,action:ActionSubCategory):RepositoryState=>{
 switch (action.type) {
    
    case ActionSubCategoryType.SUBCATEGORY_REPOSITORY:
     return {...state,loading:true}


     case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_CREATE:
         return {...state,loading:false,data: {[action.payload._id]:action.payload}}
         
     case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_UPDATE:
         return {...state,loading:false,data: {[action.payload._id]:action.payload}}

     case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_DELETE:
        return  {loading:false, data: _.omit(state.data,[action.payload._id])}     
    
    case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETALL:
        
        return {...state,loading:false, data: {..._.mapKeys(action.payload,'_id')}} 
    
    case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETBYID:
        return {...state,loading:false ,data: {[action.payload._id]:action.payload}}    
    

    case ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR :
        return {...state,error:action.payload}
    
    default:
         return {...state};
         
 }
}