import { createSlice } from '@reduxjs/toolkit';
import { fetchCart } from './cartAction';

const initialState = {
    value: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
    });
    }
});

export default cartSlice.reducer