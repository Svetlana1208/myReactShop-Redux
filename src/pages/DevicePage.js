import React, { useEffect } from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.png';
import { useParams, useNavigate } from 'react-router-dom';
import { setDoc, doc } from "firebase/firestore"; 
import { ADMIN, SHOP_ROUTE } from '../utils/consts';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { fetchDevices } from '../redux/devices/devicesAction';
import { selectDevice, delCurrentDevice } from '../redux/currentDevice/currentDeviceSlice';
import { deleteDeviceApi } from '../redux/currentDevice/currentDeviceAction';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../store';
import { fetchCart } from '../redux/cart/cartAction';


export default function DevicePage() {
  const [user] = useAuthState(auth);
  const devices = useSelector((state) => state.devices.value);
  const currentDevice = useSelector((state) => state.currentDevice.value);
  const cartRef = useSelector((state) => state.cartRef.value);
  const userRef = useSelector((state) => state.userRef.value);
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(selectDevice(devices.find(device => Number(device.id) === Number(id))));
  }, [dispatch, devices, id])

  function addToCart() {
    setDoc(doc(cartRef, `${currentDevice.title}`), currentDevice);
    dispatch(delCurrentDevice());
    dispatch(fetchCart(userRef));
    navigate(SHOP_ROUTE);
  }

  async function deleteDevice() {
    dispatch(deleteDeviceApi(currentDevice));
    dispatch(fetchDevices());
    navigate(SHOP_ROUTE);
  }

  return (
    <Container className='mt-3'>
      <div className='d-flex flex-wrap'>
        <Col md={4}>
          <Image width={400} height={320} src={currentDevice.image} />
        </Col>
        <Col md={4}>
          <div className='d-flex flex-column align-items-center'>
            <h3>{currentDevice.brand}</h3>
            <h2>{currentDevice.title}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${star}) no-repeat center center`, width: 200, height: 200, backgroundSize: 'cover', fontSize: 42}}>
                {currentDevice.rating}
            </div>
            <h3>{currentDevice.category}</h3>
          </div>
        </Col>
        <Col md={4} className=''>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 320, height: 320, fontSize: 32, border: '5px solid lightgray'}}>
              <h3>Від: {currentDevice.price} грн.</h3>
              {(user && user.email !== ADMIN) ?
              <Button variant={"outline-dark"} onClick={addToCart}>Додати у кошик</Button>
              :
              <Button variant={"outline-dark"} disabled>Додати у кошик</Button>
              }
              {(user && user.email === ADMIN) &&
              <Button variant={"outline-dark"} onClick={deleteDevice}>Видалити товар</Button>
              }
            </Card>
        </Col>
      </div>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        <p>{currentDevice.description}</p>
      </Row>
    </Container>
  )
}