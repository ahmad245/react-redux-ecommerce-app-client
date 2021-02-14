import React, { useState, useEffect } from 'react'
import { ProductCreateForm } from '../Forms'
import { useActionsCategory, useTypedSelector, useActionsSubCategory, useActionsProduct } from '../../../../hooks';
import { getAllBySubCategory } from '../../../../apis/category';
const initialState = {
    title: "Macbook Pro",
    description: "This is the best Apple product",
    price: "45000",
    categories:[
        {_id:'',name:''}
    ],
    category: "",
    subs: [''],
    shipping: "Yes",
    quantity: "50",
    // images: [
    //   // {
    //   //   public_id: "jwrzeubemmypod99e8lz",
    //   //   url:
    //   //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480909/jwrzeubemmypod99e8lz.jpg",
    //   // },
    //   // {
    //   //   public_id: "j7uerlvhog1eic0oyize",
    //   //   url:
    //   //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480912/j7uerlvhog1eic0oyize.jpg",
    //   // },
    //   // {
    //   //   public_id: "ho6wnp7sugyemnmtoogf",
    //   //   url:
    //   //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480913/ho6wnp7sugyemnmtoogf.jpg",
    //   // },
    // ],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: "White",
    brand: "Apple",
  };
  
const ProductCreate=()=>{
    const [values, setValues] = useState(initialState);
    const [subOptions, setSubOptions] = useState([{}]);
    const [showSub, setShowSub] = useState(false);
    const [loading, setLoading] = useState(false);

    const { getAllCategory } = useActionsCategory();
    const { categoryReducer ,authReducer} = useTypedSelector(state => state);

    const {createProduct} =useActionsProduct()
   

    useEffect(() => {
        getAllCategory()
    }, [])

    const handleChange = (e:any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleSubmit=(e:any)=>{
          e.preventDefault();
          const {title,category,color,brand,subs,description,price,shipping,quantity}=values;
    createProduct(
        {title,category,color,brand,subs,description, price: parseInt(price),shipping,quantity: parseInt(quantity)},
        authReducer.token)
      }
      const handleCatagoryChange=(e:any)=>{
        getAllBySubCategory(e.target.value).then(({data})=>{
            setSubOptions(data);
            const tempState={...values};
            tempState.category=e.target.value;
            setValues(tempState);
        })
            
      }

      const handleSubCategoryChange=(e:any)=>{
          const tempSate={...values};
          const subs=e.map((el:any)=>{
             return  el.value
          })
          tempSate.subs=subs;
          setValues(tempSate);
          
          
          
      }


      return (
          <>
           <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleCatagoryChange={handleCatagoryChange}
            subOptions={subOptions}
            showSub={showSub}
            categoryList={Object.values(categoryReducer.data)}
            handleSubCategoryChange={handleSubCategoryChange}
          />
          </>
      )
}
export default ProductCreate;