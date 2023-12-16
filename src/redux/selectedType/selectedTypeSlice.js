import { createSlice } from "@reduxjs/toolkit";
import { selectTypeAction } from './selectedTypeAction';

const initialState = {
    value: "Каталог",
};

const selectedTypeSlice = createSlice({
    name: 'selectedType',
    initialState,
    reducers: {
        selectType: selectTypeAction,
    }
});

export const { selectType } = selectedTypeSlice.actions;

export default selectedTypeSlice.reducer