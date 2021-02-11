export interface Category{
    _id:string;
    name:string;
    slug?:string;
}
export interface Categories{
    category:Category[];
}
export interface CategoryRepositoryAction{
    type:ActionCategoryType.CATEGORY_REPOSITORY
}

export interface CategoryRepositoryGetAll{
    type:ActionCategoryType.CATEGORY_REPOSITORY_GETALL;
    payload:any
}
export interface CategoryRepositoryGetById{
    type:ActionCategoryType.CATEGORY_REPOSITORY_GETBYID;
    payload:Category
}
export interface CategoryRepositoryCreate{
    type:ActionCategoryType.CATEGORY_REPOSITORY_CREATE;
    payload:Category;
}
export interface CategoryRepositoryUpdate{
    type:ActionCategoryType.CATEGORY_REPOSITORY_UPDATE;
    payload:Category;
}

export interface CategoryRepositoryDelete{
    type:ActionCategoryType.CATEGORY_REPOSITORY_DELETE;
    payload:Category;
}
export interface CategoryRepositoryErrorAction{
    type:ActionCategoryType.CATEGORY_REPOSITORY_ERROR;
    payload:string
}


export enum ActionCategoryType{
    CATEGORY_REPOSITORY='category_repository',
   
    CATEGORY_REPOSITORY_ERROR='category_repository_error',

    CATEGORY_REPOSITORY_GETALL='category_repository_getAll',
    CATEGORY_REPOSITORY_GETBYID='category_repository_getByID',
    CATEGORY_REPOSITORY_CREATE='category_repository_create',
    CATEGORY_REPOSITORY_UPDATE='category_repository_update',
    CATEGORY_REPOSITORY_DELETE='category_repository_delete'

}