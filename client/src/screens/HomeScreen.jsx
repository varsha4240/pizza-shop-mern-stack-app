import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getAllPizzas } from '../actions/pizzaAction';
import Pizza from '../component/Pizza';
import Loader from '../component/Loader';
import Error from '../component/Error';
import Filters from '../component/Filters';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzareducer)
    const { loading, pizzas, error } = pizzastate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch]);

    return (
        <>
            <Container>
                {
                    loading ? (
                        <Loader/>
                    )
                        : error ? (
                           <Error>Error while fetching pizzas{error}</Error>
                        )
                            : (
                                <Row>
                                    <Filters/>
                                    {pizzas.map(pizza => (
                                        <Col md={4}>
                                            <Pizza pizza={pizza} />
                                        </Col>
                                    ))}
                                </Row>
                            )
                }

            </Container>
        </>
    );
};

export default HomeScreen