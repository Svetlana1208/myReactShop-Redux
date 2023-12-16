import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBrand } from '../../api/addNewBrand';


export function addNewBrandValueAction(state, newBrand) {
    state.value = newBrand.payload;
};

export function clearBrandValueAction(state) {
    state.value = null
};

export const addBrandAction = createAsyncThunk('brand/add', addBrand);