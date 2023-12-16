import React, { useEffect } from 'react';
import Cart from './Cart';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { doc, deleteDoc } from "firebase/firestore";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRef } from '../redux/userRef/userRefSlice';
import { fetchCart } from '../redux/cart/cartAction';
import { getCartRef } from '../redux/cartRef/cartRefSlice';
import { getOrders } from '../redux/orders/ordersAction';
import { ADMIN } from '../utils/consts';
import { toggleCartVisible } from '../redux/cartVisible/cartVisibleSlice';
import { sendOrderApi } from '../api/sendOrderApi';
import { toggleSuccessVisible } from '../redux/successVisible/successVisibleSlice';


export default function CartModal() {
    const [user] = useAuthState(auth);
    const cartRef = useSelector((state) => state.cartRef.value);
    const cart = useSelector((state) => state.cart.value);
    const userRef = useSelector((state) => state.userRef.value);
    const cartVisible = useSelector((state) => state.cartVisible.value);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user && user.email !== ADMIN) {
          dispatch(getUserRef(user));
          dispatch(getCartRef(user));
        };
        if(user && user.email === ADMIN) dispatch(getOrders());
      }, [user]);
    

    useEffect(() => {
        if(userRef && user.email !== ADMIN) dispatch(fetchCart(userRef));
    }, [userRef]);

    function sendOrder() {
        const idOrder = Date.now();
        const dateOrder = new Date().toLocaleString();
        cart.map((device) => {
          sendOrderApi(dateOrder, idOrder, user, device);
          deleteDoc(doc(cartRef, `${device.title}`));
        });
        dispatch(fetchCart(userRef));
        dispatch(toggleCartVisible());
        dispatch(toggleSuccessVisible());
      }
    
  return (
    <Modal
        show={cartVisible}
        onHide={() => dispatch(toggleCartVisible())}
        size="lg"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter" className='mx-auto'>
                Кошик
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Cart/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={() => dispatch(toggleCartVisible())}>Закрити</Button>
            {cart && cart.length
            ?
            <Button variant={'outline-success'} onClick={() => sendOrder()}>Відправити замовлення</Button>
            :
            <Button variant={'outline-success'} disabled onClick={() => sendOrder()}>Відправити замовлення</Button>
            } 
        </Modal.Footer>
    </Modal>
    )
}