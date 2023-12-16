import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api/getData';
import { db } from "../../store";

export const fetchDevices = createAsyncThunk('devices/fetch', () => getData(db, "data"));