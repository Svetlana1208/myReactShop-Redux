import { initializeApp } from "firebase/app";
import { collection, getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import { LIMIT } from "./utils/consts";

import { configureStore } from '@reduxjs/toolkit';
import types from './redux/types/typesSlice';
import newType from './redux/newType/newTypeSlice';
import brands from './redux/brands/brandsSlice';
import newBrand from './redux/newBrand/newBrandSlice';
import devices from './redux/devices/devicesSlice';
import selectedType from './redux/selectedType/selectedTypeSlice';
import selectedBrand from './redux/selectedBrand/selectedBrandSlice';
import currentPage from './redux/currentPage/currentPageSlice';
import currentDevice from './redux/currentDevice/currentDeviceSlice';
import newDevice from './redux/newDevice/newDeviceSlice';
import userRef from './redux/userRef/userRefSlice';
import cartRef from './redux/cartRef/cartRefSlice';
import cart from './redux/cart/cartSlice';
import orders from './redux/orders/ordersSlice';
import cartVisible from './redux/cartVisible/cartVisibleSlice';
import brandModalVisible from './redux/brandModalVisible/brandModalVisibleSlice';
import typeModalVisible from './redux/typeModalVisible/typeModalVisibleSlice';
import deviceModalVisible from './redux/deviceModalVisible/deviceModalVisibleSlice';
import successVisible from './redux/successVisible/successVisibleSlice';

const app = initializeApp({
  apiKey: "AIzaSyCMxIB1fiZxQHWZKMI6YG4i3GolR9LXPn8",
  authDomain: "onlineshop-8265c.firebaseapp.com",
  projectId: "onlineshop-8265c",
  storageBucket: "onlineshop-8265c.appspot.com",
  messagingSenderId: "714671852303",
  appId: "1:714671852303:web:8745bcfcd46364ee504c7a",
  measurementId: "G-JJ3JCF18GP"
});
export const db = getFirestore(app);
export const auth = getAuth(app);
export const limit = LIMIT;
export const devicesList = collection(db, "data");
export const usersCarts = collection(db, "usersCarts");
export const ordersList = collection(db, "orders");
export const usersList = collection(db, "usersList");

export const store = configureStore({
  reducer: {
    types,
    newType,
    brands,
    newBrand,
    devices,
    selectedType,
    selectedBrand,
    currentPage,
    currentDevice,
    newDevice,
    userRef,
    cartRef,
    cart,
    orders,
    cartVisible,
    brandModalVisible,
    typeModalVisible,
    deviceModalVisible,
    successVisible,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})