import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toggleSuccessVisible } from '../redux/successVisible/successVisibleSlice'; 
import { useDispatch, useSelector } from 'react-redux';

export default function Success() {
    const successVisible = useSelector((state) => state.successVisible.value);
    const dispatch = useDispatch();

  return (
    <Modal
        show={successVisible}
        onHide={() => dispatch(toggleSuccessVisible())}
        size="lg"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter" className='mx-auto'>
                Ваше замовлення успішно відправлено!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Дякуємо за замовлення. Очікуйте, з вами зв'яжеться менеджер для уточнення даних.
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={() => dispatch(toggleSuccessVisible())}>Закрити</Button>
        </Modal.Footer>
    </Modal>
  );
}
