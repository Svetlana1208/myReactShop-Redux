import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api/getData';
import { db } from "../../store";

export const getOrders = createAsyncThunk('orders/fetch', () => getData(db, "orders"));