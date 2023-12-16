import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchTypes } from './redux/types/typesActions';
import { fetchBrands } from './redux/brands/brandsAction';
import { fetchDevices } from './redux/devices/devicesAction';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchBrands());
    dispatch(fetchDevices())
  }, []);

  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
}