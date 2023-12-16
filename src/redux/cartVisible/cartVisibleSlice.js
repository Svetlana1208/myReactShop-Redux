import { createSlice } from '@reduxjs/toolkit';
import { toggleCartVisibleAction } from './cartVisibleAction';

const initialState = {
    value: false
}

const cartVisibleSlice = createSlice({
  name: 'cartVisible',
  initialState,
  reducers: {
    toggleCartVisible: toggleCartVisibleAction,
  }
});

export const {toggleCartVisible} = cartVisibleSlice.actions

export default cartVisibleSlice.reducer