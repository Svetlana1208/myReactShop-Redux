import React from 'react';
import DeviceItem from './DeviceItem';
import useData from '../hooks/useData';
import { limit } from '../store';
import { useSelector } from 'react-redux';

export default function DeviceList() {
  const currentPage = useSelector((state) => state.currentPage.value);
  const devices = useData();
  let page = currentPage;
  page -= 1;
  const start = limit * page;
  const end = start + limit;
  const currentPageData = devices.slice(start, end);

    return (
      <div>
        <div className='d-flex flex-wrap'>
          {currentPageData ? 
            currentPageData.map((device) => (
                <DeviceItem key={device.id} device={device} />
                ))
            :
            <h2>Товари відсутні</h2>
          }
        </div>
      </div>
    )
  }