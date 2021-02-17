import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import Select from 'react-select'
import { brands, colors } from '../../../../../../définitions';
import { useActionsCategory, useActionsSubCategory, useTypedSelector } from '../../../../../../hooks';
import { Input } from '../../../../../../shared/Input';




const Filter = () => {
    const { getAllCategory } = useActionsCategory();
    const { getAllSubCategory } = useActionsSubCategory();
    const { categoryReducer, productReducer, subCategoryReducer } = useTypedSelector(state => state);

    useEffect(() => {
        getAllCategory();
        getAllSubCategory()
    }, [])

    const getOptionSubs = () => {
        const options = [{}]
        const subCategoryList = Object.values(subCategoryReducer.data)
        if (subCategoryList.length > 0) {
            subCategoryList.forEach((el) => {
                options.push({ value: el._id, label: el.name })
            })
        }

        return options;

    }

    const getOptionsCategory = () => {
        const options = [{}]
        const categoryList = Object.values(categoryReducer.data)
        if (categoryList.length > 0) {
            categoryList.forEach((el) => {
                options.push({ value: el._id, label: el.name })
            })
        }

        return options;

    }
    const getOptionsColor = () => {
        const options: any = []
        colors.forEach((el) => {
            options.push({ value: el, label: el })
        })
        return options;
    }
    const getOptionsBrands = () => {
        const options: any = []
        brands.forEach((el) => {
            options.push({ value: el, label: el })
        })
        return options;
    }
    return (
        <Container>
            <Row>
                <Col >
                    <Input placeholder='Search' />
                </Col>
            </Row>
            <Row>
                <Col >
                    <Select  options={getOptionsCategory()}>
                        Category
                 </Select>
                </Col>

            </Row>
            <Row>
                <Col >
                    <Select options={getOptionSubs()}>
                        Sub Category
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Select options={getOptionsColor()} >
                        Color
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Select options={getOptionsBrands()}>
                        Brand
                    </Select>
                </Col>
            </Row>
        </Container>
    )
}
export default Filter;