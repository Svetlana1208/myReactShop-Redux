import { createSlice } from "@reduxjs/toolkit";
import { selectBrandAction } from './selectedBrandAction';

const initialState = {
    value: "Всі",
};

const selectedBrandSlice = createSlice({
    name: 'selectedBrand',
    initialState,
    reducers: {
        selectBrand: selectBrandAction,
    }
});

export const { selectBrand } = selectedBrandSlice.actions;

export default selectedBrandSlice.reducer