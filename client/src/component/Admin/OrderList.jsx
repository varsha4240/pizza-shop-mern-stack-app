import React, { useEffect } from 'react';
import { Table ,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../../actions/orderAction';
import Error from '../Error';
import Loader from '../Loader';

const OrderList = () => {

    const allOrderState = useSelector(state => state.allUserOrdersReducer);
    const { loading, orders, error } = allOrderState
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch]);

    return (
        <div>
            <h1>OrderList</h1>
            {loading && (<Loader />)}
            {error && (<Error error="Admin order req fail" />)}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {orders && orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.email}</td>
                        <td>{order.transectionId}</td>
                        <td>Rs {order.orderAmount}/-</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>{order.isDeliverd ? 
                        (<h6 className='text-success'>Deliverd</h6>)
                        :<><Button className="btn-danger" onClick={() => {dispatch(deliverOrder(order._id))}}>Deliver</Button></> }</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default OrderList
