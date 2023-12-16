import React, { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/orders/ordersAction';

export default function Orders() {
  const orders = useSelector((state) => state.orders.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders())
  }, [orders])
 
  return (
      <div className='d-block'>
        <ListGroup as="ol" numbered>
          {orders.length ?
            orders.map((order) => (
                <OrderItem key={order.id} order={order} />
                ))
            :
            <h2 className='mt-5 mx-auto'>Замовлень немає</h2>
          }
        </ListGroup>
    </div>
)
}