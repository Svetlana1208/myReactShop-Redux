import React, { useEffect, useState} from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { FaTrash } from 'react-icons/fa';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../redux/cart/cartAction';
import { auth, usersCarts } from '../store';
import { useAuthState } from 'react-firebase-hooks/auth';


export default function DeviceOrder({device}) {
    const [user] = useAuthState(auth);
    const cartRef = useSelector((state) => state.cartRef.value);
    const userRef = useSelector((state) => state.userRef.value);
    const [cost, setCost] = useState(device.price);
    const dispatch = useDispatch();
    
    function deleteOrderFromCart(device) {
        deleteDoc(doc(cartRef, `${device.title}`));
        dispatch(fetchCart(userRef))
    }
      
    useEffect(() => {
        setCost(device.price * device.quantity);
    }, [ device.quantity, device.price])

    function changeQuantity(e) {
        e.preventDefault();
        const currentOrderRef = doc(usersCarts, `${user.email}`, "cart", `${device.title}`);

        updateDoc(currentOrderRef, {
            quantity: e.target.value
        });
        dispatch(fetchCart(userRef));
    }

  return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center"
        >

        <div className='container'>
            <div className='row align-items-center'>
                <div className='col'>
                    <Image width={70} height={70} src={device.image}/>
                </div>
                <div className='col-4'>
                    <div className=" me-auto fw-bold">{device.title}</div>
                </div>
                <div className='col-2'>
                    <div>{device.price} грн.</div>
                </div>
                <div className='col'>
                    <Form>
                        <Form.Control
                            style={{width: 80}}
                            value={device.quantity}
                            onChange={e => changeQuantity(e)}
                            type='number'
                            min={1}
                            >
                        </Form.Control>
                    </Form>
                </div>
                <div className='col-2'>
                    <div>{cost} грн.</div>
                </div>
                <div className='col'>
                    <FaTrash style={{cursor: 'pointer'}} onClick={() => deleteOrderFromCart(device)}/>
                </div>
            </div>
        </div>
      </ListGroup.Item>
  )
}