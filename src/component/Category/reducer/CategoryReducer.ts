import { ActionCategory } from "../action-types";
import { ActionCategoryType } from "../actions";
import _ from 'lodash';
export interface RepositoryState {
    loading: boolean;
    data:{  [key:string]:{_id:string;name:string;slug?:string} };
    error?:string;

}

const INITIALSTATAUTH = {
    loading: false,
    data:{
        '':{_id:'',name:'',slug:''}
    },
    error:''
}
export default (state:RepositoryState=INITIALSTATAUTH,action:ActionCategory):RepositoryState=>{
 switch (action.type) {
    
    case ActionCategoryType.CATEGORY_REPOSITORY:
     return {...state,loading:true}


     case ActionCategoryType.CATEGORY_REPOSITORY_CREATE:
         return {...state,loading:false, [action.payload._id]:action.payload}
         
     case ActionCategoryType.CATEGORY_REPOSITORY_UPDATE:
         return {...state,loading:false,[action.payload._id]:action.payload}

     case ActionCategoryType.CATEGORY_REPOSITORY_DELETE:
        return  {loading:false, data: _.omit(state.data,[action.payload._id])}     
    
    case ActionCategoryType.CATEGORY_REPOSITORY_GETALL:
        return {...state,loading:false, data: {..._.mapKeys(action.payload.category,'_id')}} 
    
    case ActionCategoryType.CATEGORY_REPOSITORY_GETBYID:
        return {...state,loading:false ,[action.payload._id]:action.payload}    
    

    case ActionCategoryType.CATEGORY_REPOSITORY_ERROR :
        return {...state,error:action.payload}
    
    default:
         return {...state};
         
 }
}