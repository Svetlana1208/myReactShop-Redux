import { createSlice } from '@reduxjs/toolkit';
import { 
    selectDeviceAction, 
    deleteDeviceApi,
    delCurrentDeviceAction 
} from './currentDeviceAction';

const initialState = {
    value: {},
}

const currentDeviceSlice = createSlice({
  name: 'currentDevice',
  initialState,
  reducers: {
    selectDevice: selectDeviceAction,
    delCurrentDevice: delCurrentDeviceAction,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteDeviceApi.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(deleteDeviceApi.fulfilled, (state) => {
        state.loading = false;
    });
    builder.addCase(deleteDeviceApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
    });
}
});

export const { selectDevice, delCurrentDevice } = currentDeviceSlice.actions

export default currentDeviceSlice.reducer