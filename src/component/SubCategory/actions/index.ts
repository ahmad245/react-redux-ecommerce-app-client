import { iteratee } from "lodash";

export interface SubCategory{
    name:string;
    _id:string;
    slug?:string;
    parent:string;
}

export interface SubCategoryProduct{
    sub:SubCategory;
    ptoduct:any[]
}
export interface SubCategoryRepositoryAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY
}

export interface SubCategoryRepositoryCreateAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_CREATE;
    payload:SubCategory
}
export interface SubCategoryRepositoryUpdateAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_UPDATE;
    payload:SubCategory;
}
export interface SubCategoryRepositoryDeleteAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_DELETE;
    payload:SubCategory
}
export interface SubCategoryRepositoryGetAllAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETALL;
    payload:SubCategory[]
}
export interface SubCategoryRepositoryGetByIdAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_GETBYID;
    payload:SubCategoryProduct;
}

export interface SubCategoryRepositoryErrorAction{
    type:ActionSubCategoryType.SUBCATEGORY_REPOSITORY_ERROR;
    payload:string;
}



export enum ActionSubCategoryType{
    SUBCATEGORY_REPOSITORY='sub_category_repository',
   
    SUBCATEGORY_REPOSITORY_ERROR='sub_category_repository_error',

    SUBCATEGORY_REPOSITORY_GETALL='sub_category_repository_getAll',
    SUBCATEGORY_REPOSITORY_GETBYID='sub_category_repository_getByID',
    SUBCATEGORY_REPOSITORY_CREATE='sub_category_repository_create',
    SUBCATEGORY_REPOSITORY_UPDATE='category_repository_update',
    SUBCATEGORY_REPOSITORY_DELETE='sub_category_repository_delete'

}