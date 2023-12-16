import React, { useEffect, useState } from 'react';
import DeviceOrder from './DeviceOrder';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = cart.reduce((totalAll, device) => device.price * device.quantity + totalAll, 0);
    setTotal(sum);
  }, [cart]);

    return (
      <div>
        <div className='d-block'>
          <ListGroup as="ol" numbered>
            {cart.length ? 
              cart.map((device) => (
                  <DeviceOrder key={device.id} device={device} />
                  ))
              :
              <h2>Кошик порожній</h2>
            }
            <b>Загальна сума замовлення: {total} грн.</b>
          </ListGroup>
        </div>
      </div>
    )
}