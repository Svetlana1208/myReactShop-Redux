import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewDevice } from '../../api/addNewDevice';


export function addTypeOfNewDeviceAction(state, action) {
    state.type = action.payload
};

export function addBrandOfNewDeviceAction(state, action) {
    state.brand = action.payload
};

export function addTitleOfNewDeviceAction(state, action) {
    state.title = action.payload
};

export function addDescriptionOfNewDeviceAction(state, action) {
    state.description = action.payload
};

export function addRatingOfNewDeviceAction(state, action) {
    state.rating = action.payload
};

export function addPriceOfNewDeviceAction(state, action) {
    state.price = action.payload
};

export function addImageOfNewDeviceAction(state, action) {
    state.image = action.payload
};

export function clearAllFieldsAction(state) {
    state.title = '';
    state.price = '';
    state.description = '';
    state.rating = '';
    state.image = '';
    state.brand = '';
    state.type = '';
}

export const createNewDevice = createAsyncThunk('device/add', addNewDevice);