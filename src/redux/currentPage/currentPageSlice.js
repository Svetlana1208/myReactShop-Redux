import { createSlice } from "@reduxjs/toolkit";
import { currentPageAction } from './currentPageAction';

const initialState = {
    value: 1,
};

const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: currentPageAction,
    }
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer