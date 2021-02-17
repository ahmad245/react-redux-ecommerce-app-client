import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import { Filter } from '../Filter';
import { Products } from '../User/pages/Products/pages/ProductList';

const Home=()=>{
    return (
        <Container>
            <Row>
                <Col >
                    <Filter />
                </Col>
                <Col  >
                    <Row>
                     <Products />
                    </Row>
                
                </Col>
        
            </Row>
            </Container>
    )
}

export default Home;
