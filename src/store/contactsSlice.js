import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
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
