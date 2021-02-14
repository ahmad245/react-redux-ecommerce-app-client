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

export interface Product{
    _id:string;
    title: string;
    description: string;
    price: number;
    category: string;
    subs: string[];
    shipping: SHIPPING;
    quantity?: number;
    images?:any [];
    color?: COLOR;
    brand?: BRANDS;
    slug:string;

}

export interface ProductRepositoryAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY
}
export interface ProductRepositroyCreateAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_CREATE;
    payload:Product;
}
export interface ProductRepositoryUpdateAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_UPDATE;
    payload:Product;
}
export interface ProductRepositoryDeleteAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_DELETE;
    payload:Product
}
export interface ProductRepositoryGetAllAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_GETALL;
    payload:Product[]
}
export interface ProductRepositoryGetByIdAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_GETBYID;
    payload:Product;
}

export interface ProductRepositoryErrorAction{
    type:ActionTypeProduct.PRODUCT_REPOSITORY_ERROR;
    payload:string;
}

export enum ActionTypeProduct{
    PRODUCT_REPOSITORY='product_repository',
   
    PRODUCT_REPOSITORY_ERROR='product_repository_error',

    PRODUCT_REPOSITORY_GETALL='product_repository_getAll',
    PRODUCT_REPOSITORY_GETBYID='product_repository_getByID',
    PRODUCT_REPOSITORY_CREATE='product_repository_create',
    PRODUCT_REPOSITORY_UPDATE='product_repository_update',
    PRODUCT_REPOSITORY_DELETE='product_repository_delete'
}