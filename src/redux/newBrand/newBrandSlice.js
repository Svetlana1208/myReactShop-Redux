import { createSlice } from "@reduxjs/toolkit";
import { addNewBrandValueAction, clearBrandValueAction, addBrandAction } from './newBrandAction';


const initialState = {
    value: '',
    loading: false,
    error: null,
}

const newBrandSlice = createSlice({
    name: 'newBrand',
    initialState,
    reducers: {
        addNewBrandValue: addNewBrandValueAction,
        clearBrandValue: clearBrandValueAction,
    },
    extraReducers: (builder) => {
        builder.addCase(addBrandAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addBrandAction.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(addBrandAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});

export const { addNewBrandValue, clearBrandValue } = newBrandSlice.actions;

export default newBrandSlice.reducer