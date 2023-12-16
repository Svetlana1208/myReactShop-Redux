import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';
import { toggleBrandModalVisible } from '../redux/brandModalVisible/brandModalVisibleSlice';
import { toggleTypeModalVisible } from '../redux/typeModalVisible/typeModalVisibleSlice';
import { toggleDeviceModalVisible } from '../redux/deviceModalVisible/deviceModalVisibleSlice';
import { useDispatch } from 'react-redux';

export default function Admin() {
  const dispatch = useDispatch();

  return (
    <Container className='d-flex flex-column'>
      <Button variant={'outline-primary'} className='mt-4 p-2' onClick={() => dispatch(toggleTypeModalVisible())}>
        Додати тип
      </Button>
      <Button variant={'outline-primary'} className='mt-4 p-2' onClick={() => dispatch(toggleBrandModalVisible())}>
        Додати бренд
      </Button>
      <Button variant={'outline-primary'} className='mt-4 p-2' onClick={() => dispatch(toggleDeviceModalVisible())}>
        Додати товар
      </Button>
      <CreateBrand />
      <CreateDevice />
      <CreateType />
    </Container>
)
}
