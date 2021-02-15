
import React, { useState, useEffect } from 'react'
import { ProductCreateForm, ProductUpdateForm } from '../Forms'
import { useActionsCategory, useTypedSelector, useActionsSubCategory, useActionsProduct } from '../../../../hooks';
import { getAllBySubCategory } from '../../../../apis/category';
import { IProduct } from '../../../../apis/product';
import { BRANDS, COLOR, ProductCategorySubs, SHIPPING } from '../../actions';
import { SubCategory } from '../../../SubCategory/actions';
const INITIALSTATE: ProductCategorySubs = {
    _id: '',
    title: '',
    description: '',
    category: { _id: '', name: '', slug: '' },
    price: 0,
    quantity: 0,
    shipping: SHIPPING.Yes,
    subs: [{ _id: '', slug: '', name: '', parent: '' }],
    slug: '',
    brand: BRANDS.Apple,
    color: COLOR.Black

}
const ProductUpdate = (props: any) => {
    const [values, setValues] = useState<ProductCategorySubs>(INITIALSTATE);
    const [subOptions, setSubOptions] = useState([{}]);
    const [showSub, setShowSub] = useState(false);
    const [loading, setLoading] = useState(false);

    const { getAllCategory } = useActionsCategory();
    const { categoryReducer, authReducer, productReducer } = useTypedSelector(state => state);

    const { updateProduct, getProductBySlug } = useActionsProduct()
    const colors = ["Black", "Brown", "Silver", "White", "Blue"];
    const brands = ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"];


    useEffect(() => {
        getAllCategory()
        getProductBySlug(props.match.params.slug)
    }, [])

    const initailValue = () => {
        const product = productReducer.data[props.match.params.slug]
        if (product) {

            setValues({ ...values, ...product })
        }

    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const temp = { ...values };
        updateProduct(
            {
                ...values, category: temp.category._id, subs: temp.subs.map((el) => el._id)

            }, props.match.params.slug, authReducer.token)
    }
    const handleChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleCatagoryChange = (e: any) => {
        getAllBySubCategory(e.target.value).then(({data})=>{
            setSubOptions(data);
            const tempState={...values};
            tempState.category={
                ...tempState.category,
                _id:e.target.value,
                name:categoryReducer.data[e.target.value].name,
                slug:categoryReducer.data[e.target.value].slug,
            };
            setValues(tempState);
        })
    }
    const handleSubCategoryChange = (e: any) => {
        const tempSate={...values};
        const subs:SubCategory[]=e.map((el:any):SubCategory=>{
           return {_id:el.value,name:el.label,parent:tempSate.subs[0].parent}
        })
        tempSate.subs=subs;
        setValues(tempSate);
    }
    return (
        <div>
            <ProductUpdateForm
                initailValue={initailValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                setValues={setValues}
                values={values}
                handleCatagoryChange={handleCatagoryChange}
                subOptions={subOptions}
                showSub={showSub}
                categoryList={Object.values(categoryReducer.data)}
                handleSubCategoryChange={handleSubCategoryChange}
                colors={colors}
                brands={brands}

            />
        </div>
    )
}

export default ProductUpdate;