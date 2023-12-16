import { createAsyncThunk } from '@reduxjs/toolkit';
import { delDevice } from '../../api/delDevice';


export function selectDeviceAction(state, action) {
    state.value = action.payload
};

export function delCurrentDeviceAction(state) {
    state.value = {}
}

export const deleteDeviceApi = createAsyncThunk('device/del', delDevice);