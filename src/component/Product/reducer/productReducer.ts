import { ActionProduct } from "../action-types"
import { ActionTypeProduct, BRANDS, COLOR, SHIPPING } from "../actions";
import _ from 'lodash';
import { SubCategory } from "../../SubCategory/actions";
import { Category } from "../../Category/actions";
// enum SHIPPING{
//     Yes,
//     No
// }
// enum COLOR{
//     Black, Brown, Silver, White, Blue 
// }
// enum BRANDS{
//     Apple, Samsung, Microsoft, Lenovo, ASUS
// }
export interface RepositoryState {
    loading: boolean;
    data:
    {
        [key: string]: {
            _id: string,
            title: string;
            description: string;
            price: number;
            category: Category;
            subs: SubCategory[] ;
            shipping: SHIPPING;
            quantity?: number;
            images?: any[];
            color?: COLOR;
            brand?: BRANDS;
            slug:string;
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
            category: {_id:'',name:'',slug:''},
            subs: [{_id:'',name:'',parent:'',slug:''}],
            shipping: SHIPPING.No,
            color:COLOR.Black,
            brand:BRANDS.ASUS,
            quantity:0,
            images:[],
            slug:''
        
            
            
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
            return {...state,loading:false,data:{...state.data,[action.payload._id]:action.payload}}
        case ActionTypeProduct.PRODUCT_REPOSITORY_DELETE:
            return {...state,loading:false,data:_.omit(state.data,action.payload._id)}
        
        case ActionTypeProduct.PRODUCT_REPOSITORY_ERROR:
            return {...state,error:action.payload}
           
    
        default:
            return state
    }

}