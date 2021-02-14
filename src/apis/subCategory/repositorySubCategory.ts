import axios from "axios";

export interface SubCategory{
    name:string;
    slug?:string;
    _id?:string;
    parent:string
}

export const  getAll=async()=>{
   return await axios.get(`${process.env.REACT_APP_API}/subs`);
}

export const getBySlug=async(slug:string)=>{
    return await axios.get(`${process.env.REACT_APP_API}/sub/${slug}`)
}


export const remove=async(slug:string , authtoken:string)=>{
  return await axios.delete(`${process.env.REACT_APP_API}/sub/${slug}`,{
       headers:{
           authtoken
       }
   })
}

export const update=async(sub:SubCategory,slug:string,authtoken:string)=>{
  return  await  axios.put(`${process.env.REACT_APP_API}/sub/${slug}`,sub,{
        headers:{
            authtoken
        }
    })
}

export const create=async(sub:SubCategory,authtoken:string)=>{   
 return  await  axios.post(`${process.env.REACT_APP_API}/sub`,{name:sub.name,parent:sub.parent},{
    headers:{
     authtoken
    }
 })
}