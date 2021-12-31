//added cart product


import React from 'react';
import{Container,Row,Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {FaMinusCircle,FaPlusCircle,FaTrash } from 'react-icons/fa';
import {addToCart ,deleteFromCart} from '../actions/cartAction' 
import Checkout from '../component/Checkout';
const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;

    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x,item) => x +item.price,0)
    return (
        <>
            <Container style={{fontFamily: 'Cambay, sans-serif'}}>
                <Row>
                    <Col md= {6}>
                        <h1>Cart Items</h1>
                        <Row>
                        {cartItems.map((item) => (
                            <>
                            <Col md={7}>
                                <h5>{item.name}  [{ item.varient }]</h5>
                                <h6>Price : {item.quantity} X {item.prices[0][item.varient]} = {" "} {item.price}</h6>

                                <h6>Quantity : &nbsp;
                                <FaMinusCircle className="text-danger"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>{dispatch(
                                        
                                        addToCart(item,item.quantity-1,item.varient))}}
                                /> &nbsp;

                                {item.quantity} &nbsp;
                                <FaPlusCircle className="text-success"
                                    style={{cursor:'pointer'}}
                                    onClick={()=>{dispatch(
                                        
                                        addToCart(item,item.quantity+1,item.varient))}}
                                />
                                </h6>
                            </Col>
                            <Col md={5}>
                                <img alt={item.name} src={item.image} style={{width:"80px", height:"80px"}}/>


                                <FaTrash  className="text-danger"
                                    style={{cursor:'pointer' ,marginLeft:"20px"}}
                                    onClick={()=>{dispatch(
                                        
                                        deleteFromCart(item));
                                        }}
                                /> 
                            </Col>
                            <hr/>
                            </>

                        ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                    <h1>Payement Info</h1>
                    <h4>Sub Total</h4>
                    <h5>RS : {subTotal} /-</h5>
                   <Checkout subTotal={subTotal}/>
                     </Col>
                </Row>
            </Container>

        </>
    )
}

export default CartScreen
