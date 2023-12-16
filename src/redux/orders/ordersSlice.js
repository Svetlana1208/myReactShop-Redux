import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from './ordersAction';

const initialState = {
    value: [],
    loading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(getOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});


export default ordersSlice.reducer