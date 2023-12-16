import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTypes } from '../../api/getTypes';

export const fetchTypes = createAsyncThunk('types/fetch', getTypes);

