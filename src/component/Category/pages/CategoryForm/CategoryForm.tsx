import React, { useState, useEffect } from 'react';
//import { toast } from 'react-toastify';
import { ButtonValid } from '../../../../shared/Buttons';
import { Fieldset } from '../../../../shared/Fields';
import { Form, FormContainer } from '../../../../shared/Form';
import { Input } from '../../../../shared/Input';
import { Label } from '../../../../shared/Label';

const CategoryForm = (props:any) => {
    const [name, setName] = useState('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onSubmit(name);
    }
    const initialValue=()=>{
       if(!props.initialValue) return;
           setName(props.initialValue.name)
    }
    useEffect(()=>{
        initialValue()
    },[])
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Fieldset>
                    <div className='field'>
                        <Label className="medium">
                            Category Name
                </Label>
                    </div>
                    <div className='field'>
                        <Input type="text" name="title" value={ name} change={setName} />
                    </div>



                </Fieldset>
                <ButtonValid>Valide</ButtonValid>

            </Form>

        </FormContainer>
    );

}

export default CategoryForm;