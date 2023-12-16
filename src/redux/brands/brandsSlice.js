import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from './brandsAction';

const initialState = {
    value: [],
    loading: false,
    error: null,
};

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(fetchBrands.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchBrands.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchBrands.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});


export default brandsSlice.reducer