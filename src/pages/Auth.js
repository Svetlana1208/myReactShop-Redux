import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../store';
import { addUser } from '../api/addUser';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function registration() {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      addUser(email);
      navigate(SHOP_ROUTE);
    })
    .catch((error) => {
      if(error.message === "Firebase: Error (auth/invalid-email).")
      alert("Некорректно вказана електронна пошта")
      else if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)." || error.message === "Firebase: Error (auth/missing-password).")
      alert("Пароль повинен містити як найменше 6 символів")
      else alert("Сервер тимчасово не працює")
    });
}

function login() {
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigate(SHOP_ROUTE);
    })
  .catch((error) => {
    if(error.message === "Firebase: Error (auth/user-not-found).")
    alert("Такий користувач не знайдений")
    else if(error.message === "Firebase: Error (auth/wrong-password)." || error.message === "Firebase: Error (auth/missing-password).")
    alert("Невірний пароль")
    else alert("Сервер тимчасово не працює")
});
}

return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 154}}
      >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
            className="mt-3"
            placeholder="Введіть ваш e-mail..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
            className="mt-3"
            placeholder="Введіть ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <div className='d-flex justify-content-between pt-3'>
            {isLogin ? 
              <div>
                Немає аккаунту? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
              </div>
              :
              <div>
                Є аккаунт? <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink>
              </div>
            }
            {isLogin ? 
            <Button variant="outline-primary" onClick={login}>
            Увійти
            </Button>
            :
            <Button variant="outline-primary" onClick={registration}>
            Реєстрація
            </Button>
            }
          </div>
        </Form>
      </Card>
    </Container>
  )
}
