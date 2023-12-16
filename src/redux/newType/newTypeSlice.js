import { createSlice } from "@reduxjs/toolkit";
import { addNewTypeValueAction, clearTypeValueAction, addTypeAction } from './newTypeAction';


const initialState = {
    value: '',
    loading: false,
    error: null,
}

const newTypeSlice = createSlice({
    name: 'newType',
    initialState,
    reducers: {
        addNewTypeValue: addNewTypeValueAction,
        clearTypeValue: clearTypeValueAction,
    },
    extraReducers: (builder) => {
        builder.addCase(addTypeAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addTypeAction.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(addTypeAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        });
    }
});

export const { addNewTypeValue, clearTypeValue } = newTypeSlice.actions;

export default newTypeSlice.reducer