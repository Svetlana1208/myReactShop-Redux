import { createSlice } from "@reduxjs/toolkit";
import { fetchDevices } from './devicesAction';

const initialState = {
    value: [],
    loading: false,
    error: null,
};

const devicesSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(fetchDevices.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDevices.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchDevices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});


export default devicesSlice.reducer