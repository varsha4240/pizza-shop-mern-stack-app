import React, { useEffect, useState } from 'react';
import { Form, Row, Col,Button } from 'react-bootstrap';

import Loader from '../Loader';
import Error from '../Error';
//import Success from '../Success';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaById, updatePizza } from '../../actions/pizzaAction';

const EditPizza = ({ match }) => {
    const [name, setname] = useState("");
    const [smallPrice, setsmallPrice] = useState();
    const [largePrice, setlargePrice] = useState();
    const [mediumPrice, setmediumPrice] = useState();
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');


    const dispatch = useDispatch();
    const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
    const { error, pizza } = getPizzaByState;
    const updatePizzaState = useSelector(state => state.updatePizzaByIdReducer);
    const { updateloading /*updateerror, updatesuccess */} = updatePizzaState

    useEffect(() => {
        if (pizza) {
            if (pizza._id === match.params.pizzaId) {
                setname(pizza.name);
                setdescription(pizza.description);
                setcategory(pizza.category);
                setimage(pizza.image);

                setsmallPrice(pizza.prices[0]["small"]);
                setmediumPrice(pizza.prices[0]["medium"]);
                setlargePrice(pizza.prices[0]["large"]);

            }
            else {
                dispatch(getPizzaById(match.params.pizzaId));
            }
        } else {
            dispatch(getPizzaById(match.params.pizzaId));
        }
    }, [pizza, dispatch]);

    const submitForm = (e) => {
        e.preventDefault();
        const updatedpizza = {
            _id:match.params.pizzaId,
            name,
            image,
            description,
            category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }

        };
        dispatch(updatePizza(updatedpizza))

    };

    return (
        <div>
            {updateloading && (<Loader />)}
            {error && (<Error error="Add new Pizza error" />)}
            {/* {success && (<Success success="Pizza added successful" />)} */}

            <Form onSubmit={submitForm} className="bg-light p-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={e => setname(e.target.value)}
                            placeholder="Enter name" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Small Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={smallPrice}
                                onChange={e => setsmallPrice(e.target.value)}
                                placeholder="Enter small price" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Medium Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={mediumPrice}
                                onChange={e => setmediumPrice(e.target.value)}
                                placeholder="Enter medium price" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Large Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={largePrice}
                                onChange={e => setlargePrice(e.target.value)}
                                placeholder="Enter large price"
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            value={image}
                            onChange={e => setimage(e.target.value)}
                            placeholder="Add image URL" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description </Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                        placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        value={category}
                        onChange={e => setcategory(e.target.value)}
                        placeholder="Enter category" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Update Pizza
                </Button>
            </Form>
        </div>
    )
}

export default EditPizza
