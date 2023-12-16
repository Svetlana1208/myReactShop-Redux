import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrand } from '../redux/selectedBrand/selectedBrandSlice';

export default function BrandBar() {
    const selectedBrand = useSelector((state) => state.selectedBrand.value);
    const brands = useSelector((state) => state.brands.value);
    const dispatch = useDispatch();

  return (
        <ListGroup horizontal>
                {brands.map(brand => 
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        key={brand.id}
                        className='rounded-2'
                        active={ brand.value === selectedBrand}
                        onClick={() => dispatch(selectBrand(brand))}
                    >
                        {brand.value}
                    </ListGroup.Item>
                )}
        </ListGroup>
  );
};