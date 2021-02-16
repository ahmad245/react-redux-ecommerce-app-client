
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