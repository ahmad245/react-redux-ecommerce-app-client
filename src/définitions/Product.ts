import { Category, Pagination, SubCategory } from ".";


export enum SHIPPING{
    Yes= 'Yes',
     No='No'
 }
 export enum COLOR{
    Black = 'Black', Brown='Brown', Silver='Silver', White='White', Blue='Blue' 
 }
 export enum BRANDS{
     Apple='Appple', Samsung='Samsung', Microsoft='Microsoft', Lenovo='Lenovo', ASUS='ASUS'
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
 export interface ProductCategorySubs{
     _id:string;
     title: string;
     description: string;
     price: number;
     category: Category;
     subs: SubCategory[];
     shipping: SHIPPING;
     quantity?: number;
     images?:any [];
     color?: COLOR;
     brand?: BRANDS;
     slug:string; 
 }

 export interface ProductFilter{
     data:ProductCategorySubs;
     success:boolean;
     count:number;
     pagination?:Pagination

 }