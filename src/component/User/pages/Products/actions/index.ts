import { ProductCategorySubs } from "../../../../../définitions";



export interface ProductRepositoryAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY
}

export interface ProductRepositoryGetAllAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_GETALL;
    payload:ProductCategorySubs[]
}


export interface ProductRepositoryErrorAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR;
    payload:string;
}

export enum ActionTypeProduct{
    PRODUCT_REPOSITORY='product_repository',
   
    PRODUCT_REPOSITORY_ERROR='product_repository_error',

    PRODUCT_REPOSITORY_GETALL='product_repository_getAll',
   
}