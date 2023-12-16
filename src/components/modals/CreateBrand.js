import React from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/brands/brandsAction';
import { addBrandAction } from '../../redux/newBrand/newBrandAction';
import { addNewBrandValue, clearBrandValue } from '../../redux/newBrand/newBrandSlice';
import { toggleBrandModalVisible } from '../../redux/brandModalVisible/brandModalVisibleSlice';

export default function CreateBrand() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const newBrand = useSelector((state) => state.newBrand.value);
    const brandModalVisible = useSelector((state) => state.brandModalVisible.value);

    function addBrand() {
        dispatch(addBrandAction(newBrand));
        dispatch(toggleBrandModalVisible());
        dispatch(fetchBrands());
        navigate(SHOP_ROUTE);
    }

    function closeModal() {
        dispatch(toggleBrandModalVisible());
        dispatch(clearBrandValue());
    }

  return (
    <Modal
    show={brandModalVisible}
    onHide={closeModal}
    size="lg"
    centered
>
    <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            Додати новий бренд
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Control
                onChange={e => dispatch(addNewBrandValue(e.target.value))}
                placeholder={"Введіть назву бренду"}>
            </Form.Control>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant={'outline-danger'} onClick={closeModal}>Закрити</Button>
        {newBrand
        ?
        <Button variant={'outline-success'} onClick={addBrand}>Додати</Button>
        :
        <Button variant={'outline-success'} disabled onClick={addBrand}>Додати</Button>
        }
    </Modal.Footer>
</Modal>
)
}