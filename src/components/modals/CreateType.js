import React from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypes } from '../../redux/types/typesActions';
import { addNewTypeValue, clearTypeValue } from '../../redux/newType/newTypeSlice';
import { addTypeAction } from '../../redux/newType/newTypeAction';
import { toggleTypeModalVisible } from '../../redux/typeModalVisible/typeModalVisibleSlice';

export default function CreateType() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const newType = useSelector((state) => state.newType.value);
    const typeModalVisible = useSelector((state) => state.typeModalVisible.value);

    function addType() {
        dispatch(addTypeAction(newType));
        dispatch(toggleTypeModalVisible());
        dispatch(fetchTypes());
        navigate(SHOP_ROUTE);
    };

    function closeModal() {
        dispatch(toggleTypeModalVisible());
        dispatch(clearTypeValue())
    }

    return (
        <Modal
            show={typeModalVisible}
            onHide={closeModal}
            size="lg"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати новий тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => dispatch(addNewTypeValue(e.target.value))}
                        placeholder={"Введіть назву типу"}>
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={closeModal}>Закрити</Button>
                {newType
                ?
                <Button variant={'outline-success'} onClick={addType}>Додати</Button>
                :
                <Button variant={'outline-success'} disabled onClick={addType}>Додати</Button>
                }
            </Modal.Footer>
    </Modal>
    )
}