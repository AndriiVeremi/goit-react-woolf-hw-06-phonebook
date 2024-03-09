import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.contacts;
export const getFilter = store => store.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    const normalizedFilter = filter.filter.toLowerCase();

    return contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);



