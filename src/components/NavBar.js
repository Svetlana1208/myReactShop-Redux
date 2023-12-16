import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ORDER_ROUTE} from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import CartModal from './CartModal';
import Success from './Success';
import { auth } from '../store';
import { toggleCartVisible } from '../redux/cartVisible/cartVisibleSlice';
import { useDispatch } from 'react-redux';

export default function NavBar() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <NavLink style={{marginLeft: 50, color:'blue'}} to='/shop'>Мій магазин</NavLink>
            {user ?
                <Nav className='ms-auto' style={{ gap: 10}}>
                    <p style={{margin: 'auto 0', color: 'blue'}}>{user.email}</p>
                    {user.email === 'admin@admin.ua' ?
                        <div style={{display:'flex', gap: 10}}>
                            <Button variant="outline-primary" onClick={() => navigate(ORDER_ROUTE)}>Замовлення</Button>
                            <Button variant="outline-primary" onClick={() => navigate(ADMIN_ROUTE)}>Адмін панель</Button>
                        </div>
                        :
                        <Button variant="outline-primary" onClick={() => dispatch(toggleCartVisible())}>Кошик</Button>
                    }
                    <a href="/">
                        <Button variant="outline-primary" onClick={() => auth.signOut()}>Вийти</Button>
                    </a>
                </Nav>
                :
                <Nav className='ms-auto' style={{color:'blue', gap: 10}}>
                    <Button variant="outline-primary" onClick={() => navigate(LOGIN_ROUTE)}>Авторизація</Button>
                    <Button variant="outline-primary" onClick={() => navigate(REGISTRATION_ROUTE)}>Реєстрація</Button>
                </Nav>
            }
            <CartModal/>
            <Success/>
        </Container>
    </Navbar>
    );
}