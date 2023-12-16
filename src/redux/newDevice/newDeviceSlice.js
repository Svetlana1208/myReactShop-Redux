import { createSlice } from '@reduxjs/toolkit'
import { 
  addTypeOfNewDeviceAction, 
  addBrandOfNewDeviceAction, 
  addTitleOfNewDeviceAction, 
  addDescriptionOfNewDeviceAction, 
  addRatingOfNewDeviceAction, 
  addPriceOfNewDeviceAction,
  addImageOfNewDeviceAction,
  clearAllFieldsAction,
  createNewDevice
} from './newDeviceAction';

const initialState = {
    title: '', 
    price: '', 
    description: '', 
    rating: '', 
    image: '',
    brand: '',
    type: '',
    quantity: 1
}

const newDeviceSlice = createSlice({
  name: 'newDevice',
  initialState,
  reducers: {
    addTypeOfNewDevice: addTypeOfNewDeviceAction,
    addBrandOfNewDevice: addBrandOfNewDeviceAction,
    addTitleOfNewDevice: addTitleOfNewDeviceAction,
    addDescriptionOfNewDevice: addDescriptionOfNewDeviceAction,
    addRatingOfNewDevice: addRatingOfNewDeviceAction,
    addPriceOfNewDevice: addPriceOfNewDeviceAction,
    addImageOfNewDevice: addImageOfNewDeviceAction,
    clearAllFields: clearAllFieldsAction,
  },
  extraReducers: (builder) => {
    builder.addCase(createNewDevice.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(createNewDevice.fulfilled, (state) => {
        state.loading = false;
        state.title = '';
        state.price = '';
        state.description = '';
        state.rating = '';
        state.image = '';
        state.brand = '';
        state.type = '';
    });
    builder.addCase(createNewDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
    });
}
});

export const {
  addTypeOfNewDevice, 
  addBrandOfNewDevice, 
  addTitleOfNewDevice, 
  addDescriptionOfNewDevice, 
  addRatingOfNewDevice, 
  addPriceOfNewDevice,
  addImageOfNewDevice,
  clearAllFields
} = newDeviceSlice.actions

export default newDeviceSlice.reducer