import { createAsyncThunk } from '@reduxjs/toolkit';
import { addType } from '../../api/addNewType';


export function addNewTypeValueAction(state, newType) {
    state.value = newType.payload;
};

export function clearTypeValueAction(state) {
    state.value = null
};

export const addTypeAction = createAsyncThunk('type/add', addType);