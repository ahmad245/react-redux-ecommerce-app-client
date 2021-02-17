import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import { FaPlusCircle, FaRegEye } from 'react-icons/fa';
import { useActionsProduct, useTypedSelector } from '../../../../../../hooks';
import { Card } from '../../../../../../shared/Card';
import { Filter } from '../../../../../Filter';
import ReactPaginate from 'react-paginate';
import { Pagination } from '.';

// interface Comment{
//     name:string;
// }
// interface Comments{
//     data:Comment[];
//     offset:number;
//     pageCount: number;
// }
const Products = () => {
    const { productReducer } = useTypedSelector(state => state);
    const { getAllProduct } = useActionsProduct();
    const [pageState, setPageState] = React.useState(null)

    useEffect(() => {
        getAllProduct()
    }, [])

    const actions = (to1: string, to2: string) => {
        const link = [
            {
                label: (
                    <>
                        <FaRegEye /> View
                    </>
                ),
                to: to1,
            },
            {
                label: (
                    <>
                        <FaPlusCircle /> Add
                    </>
                ),
                to: to2,
            }
        ]
        return link;
    }
    const renderProductList = () => {
        const productList = Object.values(productReducer.data);
        console.log(productList);
        
        if (productList.length > 0 && productList[0]._id !='') {
            return productList.map((el) => {
                let url1 = `/user/products/view/${el._id}/${el.slug}`;
                let url2 = `/admin/products/add/${el._id}/${el.slug}`;
                return <Col xs={6} md={4}>
                    <Card src='' title={el.title} description={el.description} actions={actions(url1, url2)} />
                </Col>
            })
        }
        return <div>loading...</div>
    }

    const handlePageClick = (data: any) => {
        //     let selected = data.selected;
        //     let offset = Math.ceil(selected * props.perPage);
        //     let oldState={...pageState};
        //     let result=getData(offset);
        //     oldState.data=result.data;
        //     oldState.offset=offset;
        //   let  pageCount= Math.ceil(result.meta.total_count / 2);
        //   oldState.pageCount=pageCount;
        //     setPageState(oldState);
    };

    return (
        <Container>
            <Row>
                {/* <Col xl={4}>
                    <Filter />
                </Col> */}
                <Col xl={12} >
                    <Row>
                    {renderProductList()}
                    </Row>
                   
                </Col>

            </Row>
            <Row>
                <Col xl={12}>
                    <Pagination>
                    <ReactPaginate 
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        //  pageCount={pageState.pageCount}
                        pageCount={5}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        //   subContainerClassName={'pages pagination'}
                        activeClassName={'active'}

                    />
                    </Pagination>
                </Col>

            </Row>
        </Container>
    )


}
export default Products;