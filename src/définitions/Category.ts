export interface Category{
    _id:string;
    name:string;
    slug?:string;
}
export interface Categories{
    category:Category[];
}
