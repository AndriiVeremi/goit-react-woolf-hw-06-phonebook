import { createSlice } from '@reduxjs/toolkit';
import startContacts from '../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: startContacts },
  reducers: {
    createContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    delContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContacts, delContacts } = contactsSlice.actions;
