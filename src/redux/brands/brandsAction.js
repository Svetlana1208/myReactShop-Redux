import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBrands } from '../../api/getBrands';

export const fetchBrands = createAsyncThunk('brands/fetch', getBrands);

