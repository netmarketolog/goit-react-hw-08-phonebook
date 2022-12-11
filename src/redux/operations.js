import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6390d4b50bf398c73a94528a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const resp = await axios.post('/contacts', { name, number });
      return resp.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
