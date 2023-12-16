import { createSlice } from '@reduxjs/toolkit';
import { toggleSuccessVisibleAction } from './successVisibleAction';

const initialState = {
    value: false
}

const successVisibleSlice = createSlice({
  name: 'successVisible',
  initialState,
  reducers: {
    toggleSuccessVisible: toggleSuccessVisibleAction,
  }
});

export const {toggleSuccessVisible} = successVisibleSlice.actions

export default successVisibleSlice.reducer