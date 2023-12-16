import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { selectType } from '../redux/selectedType/selectedTypeSlice';
import { setCurrentPage } from '../redux/currentPage/currentPageSlice';

export default  function TypeBar() {
    const selectedType = useSelector((state) => state.selectedType.value);
    const types = useSelector((state) => state.types.value);
    const dispatch = useDispatch();

    function onChangeType(type) {
        dispatch(selectType(type));
        dispatch(setCurrentPage(1))
    }

    return (
        <ListGroup>
            {types.map(type =>
                <ListGroup.Item 
                    style={{cursor: 'pointer'}}
                    active={type.value === selectedType}
                    onClick={() => onChangeType(type)}
                    key={type.id}
                >
                    {type.value}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};