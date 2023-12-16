import { createSlice } from '@reduxjs/toolkit';
import { toggleBrandModalVisibleAction } from './brandModalVisibleAction';

const initialState = {
    value: false
}

const brandModalVisibleSlice = createSlice({
  name: 'brandModalVisible',
  initialState,
  reducers: {
    toggleBrandModalVisible: toggleBrandModalVisibleAction,
  }
});

export const {toggleBrandModalVisible} = brandModalVisibleSlice.actions

export default brandModalVisibleSlice.reducer