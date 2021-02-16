import axios from "axios";

import qs from 'qs'
export interface IProduct{
    _id?:string;
    title: string;
    description: string;
    price: number;
    category: string;
    subs: string[];
    shipping: string;
    quantity?: number;
    images?:any [];
    color?: string;
    brand?: string;
}

export const  getAll=async()=>{
   return await axios.get(`${process.env.REACT_APP_API}/products/${100}`);
}

export const getBySlug=async(slug:string)=>{
    return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`)
}


export const remove=async(slug:string , authtoken:string)=>{
  return await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`,{
       headers:{
           authtoken
       }
   })
}

export const update=async(product:IProduct,slug:string,authtoken:string)=>{
  return  await  axios.put(`${process.env.REACT_APP_API}/product/${slug}`,product,{
        headers:{
            authtoken
        }
    })
}

export const create=async(product:IProduct,authtoken:string)=>{
    
 return  await  axios.post(`${process.env.REACT_APP_API}/product`,product,{
    headers:{
     authtoken
    }
 })
}


export const productsFilter=async(params:any)=>{
  return axios.get(`${process.env.REACT_APP_API}/productList`,{
      params:{...params},
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
     
  })
}

// params: {
//     city: cityParams,
//     age: ageParams
//   },