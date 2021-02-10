import axios from "axios";

export interface Category{
    name:string;
    slug?:string
}

export const  getAll=async()=>{
   return await axios.get(`${process.env.REACT_APP_API}/categories`);
}

export const getBySlug=async(slug:string)=>{
    return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`)
}


export const remove=async(slug:string , authtoken:string)=>{
   await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`,{
       headers:{
           authtoken
       }
   })
}

export const updqate=async(category:string,slug:string,authtoken:string)=>{
    await  axios.put(`${process.env.REACT_APP_API}/category/${slug}`,category,{
        headers:{
            authtoken
        }
    })
}

export const create=async(category:string,authtoken:string)=>{
 return  await  axios.post(`${process.env.REACT_APP_API}/category`,category,{
    headers:{
     authtoken
    }
 })
}