import React from 'react';
import { Pagination } from 'react-bootstrap';
import useData from '../hooks/useData';
import { limit } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/currentPage/currentPageSlice';

export default function Pages() {
  const devices = useData();
  const currentPage = useSelector((state) => state.currentPage.value);
  const dispatch = useDispatch();
  const pageCount = Math.ceil(devices.length / limit);
  const pages = [];

  for(let i = 0; i < pageCount; i += 1) {
    pages.push(i + 1)
  }

  return (
    <Pagination className='mt-5'>
        {pages.map(page =>
            <Pagination.Item 
                key={page}
                active={page === currentPage}
                onClick={() => dispatch(setCurrentPage(page))}
            >
                {page}
            </Pagination.Item>    
        )}
    </Pagination>
  )
}
