import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactsSlice';
import { filterReducer } from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
