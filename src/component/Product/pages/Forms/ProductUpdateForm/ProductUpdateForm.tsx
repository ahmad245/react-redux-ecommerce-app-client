import React, { useEffect } from 'react'
import Select from 'react-select'
const ProductUpdateForm = ({
 brands,colors,   initailValue,  handleSubCategoryChange, categoryList, handleSubmit, handleChange, setValues, values , handleCatagoryChange, subOptions, showSub, }: any) => {

    const {
        title,
        description,
        price,
        category,
        subs,
        shipping,
        quantity,
        images,
       
        color,
        brand,
    } = values;


        useEffect(()=>{
            initailValue()
        })

    const getSubs = () => {
        const options = [{}]
        if (subOptions) {
            subOptions.forEach((el: any) => {
                options.push({ value: el._id, label: el.name })
            })
        }

        return options;

    }
    const subCategoryDefaultValues=()=>{
        const options:any[] = []
        if (subs) {
            subs.forEach((el: any) => {
                options.push({ value: el._id, label: el.name })
            })
        } 
        return options;
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Shipping</label>
                <select
                    name="shipping"
                    className="form-control"
                    onChange={handleChange}
                    value={shipping}
                >
                    <option>Please select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Color</label>
                <select value={color} name="color" className="form-control" onChange={handleChange}>
                    <option>Please select</option>
                    {colors.map((c: any) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Brand</label>
                <select value={brand} name="brand" className="form-control" onChange={handleChange}>
                    <option>Please select</option>
                    {brands.map((b: any) => (
                        <option key={b} value={b}>
                            {b}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Category</label>
                <select
                    name="category"
                    className="form-control"
                    onChange={handleCatagoryChange}
                    value={category}
                >
                    <option>Please select</option>
                    {categoryList.length > 0 &&
                        categoryList.map((c: any) => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            {subOptions && subOptions.length > 1 && (

                <div>

                    <Select
                     defaultValue={[...subCategoryDefaultValues()]} 
                     onChange={(value) => handleSubCategoryChange(value)}
                      options={getSubs()} 
                      isMulti
                      ></Select>

                </div>
            )}

            <br />
            <button className="btn btn-outline-info">Save</button>
        </form>
    );

}

export default ProductUpdateForm;