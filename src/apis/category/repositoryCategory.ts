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
  return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`,{
       headers:{
           authtoken
       }
   })
}

export const update=async(category:Category,slug:string,authtoken:string)=>{
  return  await  axios.put(`${process.env.REACT_APP_API}/category/${slug}`,category,{
        headers:{
            authtoken
        }
    })
}

export const create=async(category:string,authtoken:string)=>{
    
 return  await  axios.post(`${process.env.REACT_APP_API}/category`,{name:category},{
    headers:{
     authtoken
    }
 })
}

 export const getSubCategoryByCategory=async(id:string)=>{
     return await axios.get(`${process.env.REACT_APP_API}/category/subs/${id}`)

 }
