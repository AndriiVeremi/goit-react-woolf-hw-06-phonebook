import { Report } from 'notiflix/build/notiflix-report-aio';

export const getContacts = store => store.contacts;
export const getFilter = store => store.filter;
export const getFilteredContacts = store => {
  const { filter, contacts } = store;

  if (!filter.filter) {
    return contacts.contacts;
  }

  const normalizedFilter = filter.filter.toLowerCase();
  const visibleContacts = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(normalizedFilter)
  );

  if (normalizedFilter && !visibleContacts.length) {
    alert('No contacts matching your request');
    Report.info(
      'Sorry',
      'No contacts matching your request',
      'Ok'
    );
  }

  return visibleContacts;
};

