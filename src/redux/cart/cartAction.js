import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCart } from '../../api/getCart';

export const fetchCart = createAsyncThunk('cart/fetch', getCart);