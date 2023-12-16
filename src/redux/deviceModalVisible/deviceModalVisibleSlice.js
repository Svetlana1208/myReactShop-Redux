import { createSlice } from '@reduxjs/toolkit';
import { toggleDeviceModalVisibleAction } from './deviceModalVisibleAction';

const initialState = {
    value: false
}

const deviceModalVisibleSlice = createSlice({
  name: 'deviceModalVisible',
  initialState,
  reducers: {
    toggleDeviceModalVisible: toggleDeviceModalVisibleAction,
  }
});

export const {toggleDeviceModalVisible} = deviceModalVisibleSlice.actions

export default deviceModalVisibleSlice.reducer