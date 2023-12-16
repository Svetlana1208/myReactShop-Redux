import React from 'react';
import {Alert, Button, Dropdown, Form, FormControl} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { 
    addTypeOfNewDevice, 
    addBrandOfNewDevice, 
    addTitleOfNewDevice, 
    addDescriptionOfNewDevice, 
    addRatingOfNewDevice, 
    addPriceOfNewDevice,
    addImageOfNewDevice,
    clearAllFields
} from '../../redux/newDevice/newDeviceSlice';
import { fetchDevices } from '../../redux/devices/devicesAction';
import { createNewDevice } from '../../redux/newDevice/newDeviceAction';
import { toggleDeviceModalVisible } from '../../redux/deviceModalVisible/deviceModalVisibleSlice';

export default function CreateDevice() {
    const navigate = useNavigate();
    const types = useSelector((state) => state.types.value);
    const brands = useSelector((state) => state.brands.value);
    const newDevice = useSelector((state) => state.newDevice);
    const deviceModalVisible = useSelector((state) => state.deviceModalVisible.value)
    const dispatch = useDispatch();

    function addDevice () {
        dispatch(createNewDevice(newDevice));
        dispatch(toggleDeviceModalVisible());
        dispatch(fetchDevices());
        navigate(SHOP_ROUTE);
    };

    function closeModal() {
        dispatch(toggleDeviceModalVisible());
        dispatch(clearAllFields())
    }

  return (
    <Modal
        show={deviceModalVisible}
        onHide={closeModal}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Додати товар
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className='mt-2 mb-2'>
                    <DropdownToggle>{newDevice.type || "Оберіть тип"}</DropdownToggle>
                    <DropdownMenu>
                        {types.map(type =>
                            <DropdownItem key={type.id} onClick={() => dispatch(addTypeOfNewDevice(type.value))}>{type.value}</DropdownItem>
                            )}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className='mt-2 mb-2'>
                    <DropdownToggle>{newDevice.brand || "Оберіть бренд"}</DropdownToggle>
                    <DropdownMenu>
                        {brands.map(brand =>
                            <DropdownItem key={brand.id} onClick={() => dispatch(addBrandOfNewDevice(brand.value))}>{brand.value}</DropdownItem>
                            )}
                    </DropdownMenu>
                </Dropdown>
                 <FormControl
                    className='mt-3'
                    value={newDevice.title}
                    onChange={(e) => dispatch(addTitleOfNewDevice(e.target.value))}
                    placeholder='Введіть назву товару'    
                />
                <FormControl
                    className='mt-3'
                    value={newDevice.description}
                    onChange={(e) => dispatch(addDescriptionOfNewDevice(e.target.value))}
                    placeholder='Введіть опис товару'    
                />
                <FormControl
                    className='mt-3'
                    value={newDevice.rating}
                    onChange={(e) => dispatch(addRatingOfNewDevice(e.target.value))}
                    placeholder='Введіть рейтинг товару'    
                />
                <FormControl
                    className='mt-3'
                    value={newDevice.price}
                    onChange={(e) => dispatch(addPriceOfNewDevice(e.target.value))}
                    placeholder='Введіть вартість товару'
                    type='number'    
                />
                <FormControl
                    className='mt-3'
                    value={newDevice.image}
                    onChange={(e) => dispatch(addImageOfNewDevice(e.target.value))}
                    placeholder='Введіть посилання на зображення товару'    
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={closeModal}>Закрити</Button>
            {
            newDevice.type && newDevice.brand && newDevice.title && newDevice.description && newDevice.rating && newDevice.price && newDevice.image
            ?
            <Button variant={'outline-success'} onClick={() => addDevice(newDevice)}>Додати</Button>
            :
            <Alert>Заповніть всі поля</Alert>
            }
        </Modal.Footer>
    </Modal>
    )
}