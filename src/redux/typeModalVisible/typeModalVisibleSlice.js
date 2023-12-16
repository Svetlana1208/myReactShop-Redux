import { createSlice } from '@reduxjs/toolkit';
import { toggleTypeModalVisibleAction } from './typeModalVisibleAction';

const initialState = {
    value: false
}

const typeModalVisibleSlice = createSlice({
  name: 'typeModalVisible',
  initialState,
  reducers: {
    toggleTypeModalVisible: toggleTypeModalVisibleAction,
  }
});

export const {toggleTypeModalVisible} = typeModalVisibleSlice.actions

export default typeModalVisibleSlice.reducer