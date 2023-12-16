import { createSlice } from "@reduxjs/toolkit";
import { fetchTypes } from './typesActions';

const initialState = {
    value: [],
    loading: false,
    error: null,
};

const typeSlice = createSlice({
    name: 'types',
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder.addCase(fetchTypes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTypes.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchTypes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});


export default typeSlice.reducer