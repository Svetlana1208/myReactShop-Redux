import { createSlice } from '@reduxjs/toolkit';
import { getCartRefAction } from './cartRefAction';

const initialState = {
    value: null
}

const cartRefSlice = createSlice({
  name: 'cartRef',
  initialState,
  reducers: {
    getCartRef: getCartRefAction,
  }
});

export const { getCartRef } = cartRefSlice.actions

export default cartRefSlice.reducer