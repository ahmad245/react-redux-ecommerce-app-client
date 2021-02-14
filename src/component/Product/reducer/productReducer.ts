import { ActionProduct } from "../action-types"
import { ActionTypeProduct } from "../actions";
import _ from 'lodash';
enum SHIPPING{
    Yes,
    No
}
enum COLOR{
    Black, Brown, Silver, White, Blue 
}
enum BRANDS{
    Apple, Samsung, Microsoft, Lenovo, ASUS
}
export interface RepositoryState {
    loading: boolean;
    data:
    {
        [key: string]: {
            _id: string,
            title: string;
            description: string;
            price: number;
            category: string;
            subs: string[];
            shipping: SHIPPING;
            quantity?: number;
            images?: any[];
            color?: COLOR;
            brand?: BRANDS;
        }

    };
    error?: string;
}
const INITIALSTATE:RepositoryState={
    loading:false,
    data:{
        '':{
            _id: '',
            title: '',
            description: '',
            price: 0,
            category: '',
            subs: [''],
            shipping: SHIPPING.No,
            
        }
    },
    error:''
}

export default  (state=INITIALSTATE,action:ActionProduct):RepositoryState=>{

    switch (action.type) {

        case ActionTypeProduct.PRODUCT_REPOSITORY:
            return {...state,loading:true}

        case ActionTypeProduct.PRODUCT_REPOSITORY_CREATE:
            return {...state,loading:false,data:{...state.data,[action.payload._id]:action.payload}}

        case ActionTypeProduct.PRODUCT_REPOSITORY_UPDATE:
            return {...state,loading:false,data:{...state.data,[action.payload._id]:action.payload}}

        case ActionTypeProduct.PRODUCT_REPOSITORY_GETALL:
            return {...state,loading:false,data:{..._.mapKeys(action.payload,'_id')}}
        
        case ActionTypeProduct.PRODUCT_REPOSITORY_GETBYID:
        
        case ActionTypeProduct.PRODUCT_REPOSITORY_DELETE:
            return {...state,loading:false,data:_.omit(state.data,action.payload._id)}
        
        case ActionTypeProduct.PRODUCT_REPOSITORY_ERROR:
            return {...state,error:action.payload}
           
    
        default:
            return state
    }

}