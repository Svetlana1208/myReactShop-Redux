import { createSlice } from '@reduxjs/toolkit';
import { getUserRefAction } from './userRefAction';

const initialState = {
    value: null
}

const userRefSlice = createSlice({
  name: 'userRef',
  initialState,
  reducers: {
    getUserRef: getUserRefAction
  }
});

export const {getUserRef} = userRefSlice.actions

export default userRefSlice.reducer