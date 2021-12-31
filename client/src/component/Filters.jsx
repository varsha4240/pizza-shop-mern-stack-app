import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterPizza } from '../actions/pizzaAction';


const Filters = () => {
    const [searchKey, setsearchKey] = useState('');
    const [category, setcategory] = useState('all')
    const dispatch = useDispatch()
    return (
        <div className='p-4 mt-4 ' >
            <Form>
                <Row>
                    <Col>
                        <Form.Control
                            value={searchKey}
                            onChange={e => setsearchKey(e.target.value)}
                            placeholder="search Pizza" style={{ position: 'relative', left: '150px', border: '1px solid black' }} />
                    </Col>
                    <Col>
                        <select class="form-select" value={category}
                            onChange={e => setcategory(e.target.value)} style={{ position: 'relative', left: '150px', border: '1px solid black' }}>

                            <option>All </option>
                            <option>veg</option>
                            <option>nonveg</option>
                        </select>
                    </Col>
                    <Col>
                        <Button onClick={() => (dispatch(filterPizza(searchKey, category)))} style={{ position: 'relative', left: '150px' }}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Filters
