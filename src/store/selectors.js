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



// export const getFilteredContacts = store => {
//   const { filter, contacts } = store;

//   if (!filter.filter) {
//     return contacts.contacts;
//   }

//   const normalizedFilter = filter.filter.toLowerCase();
//   const visibleContacts = contacts.contacts.filter(contact =>
//     contact.name.toLowerCase().trim().includes(normalizedFilter)
//   );

//   if (normalizedFilter && !visibleContacts.length) {
//     alert('No contacts matching your request');
//     Report.info(
//       'Sorry',
//       'No contacts matching your request',
//       'Ok'
//     );
//   }

//   return visibleContacts;
// };

