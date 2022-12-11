import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const fetchContactsSuccessReduser = (state, action) => {
  state.items = action.payload;
};
const addContactSuccessReduser = (state, action) => {
  state.items.push(action.payload);
};
const deleteContactSuccessReduser = (state, action) => {
  const deleteById = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(deleteById, 1);
};

const pendingReduser = state => {
  state.isLoading = true;
};
const fulfilledReduser = state => {
  state.isLoading = false;
  state.error = null;
};

const rejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const defContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defContacts,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReduser)
      .addCase(addContact.fulfilled, addContactSuccessReduser)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReduser)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReduser)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReduser)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReduser),
});

export const contactsReducer = contactsSlice.reducer;
