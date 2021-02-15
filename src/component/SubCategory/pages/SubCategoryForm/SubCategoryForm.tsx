import React, { useState, useEffect } from 'react';

//import { toast } from 'react-toastify';

import { useActionsCategory, useTypedSelector } from '../../../../hooks';
import { FormContainer, Form } from '../../../../shared/Form';
import { Fieldset } from '../../../../shared/Fields';
import { Label } from '../../../../shared/Label';
import { Input } from '../../../../shared/Input';
import { ButtonValid } from '../../../../shared/Buttons';


const  SubCategoryForm=(props:any)=>{
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const { getAllCategory } = useActionsCategory();
    const { categoryReducer } = useTypedSelector(state => state)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(category == ''){
            let categoryList = Object.values(categoryReducer.data);
            props.onSubmit(name,categoryList[0]._id);
        }else{
            props.onSubmit(name,category);
        }
        
    }
    const initialValue=()=>{
       if(!props.initialValue) return;
           setName(props.initialValue.name)
           setCategory(props.initialValue.parent)
    }
    useEffect(()=>{
        initialValue()
        getAllCategory()
    },[])
    const renderOption=()=>{
        if (!categoryReducer.data ) return <div>loading</div>
        let categoryList = Object.values(categoryReducer.data);
      return   categoryList.map((el)=>{
           return <option key={el._id} value={el._id}>{el.name}</option>
        })
    }
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Fieldset>
                    <div className='field'>
                        <Label className="medium">
                           sub Category Name
                </Label>
                    </div>
                    <div className='field'>
                        <Input type="text" name="title" value={ name} change={setName} />
                    </div>
                    <div className='field'>
                        <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                            {categoryReducer.data && renderOption()}
                        </select>
                    </div>


                </Fieldset>
                <ButtonValid>Valide</ButtonValid>

            </Form>

        </FormContainer>
    );

}


export default SubCategoryForm;