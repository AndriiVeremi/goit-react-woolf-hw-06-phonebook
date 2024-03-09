import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { delContacts } from 'store/contactsSlice';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilteredContacts } from 'store/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {

  const contacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch();
  
  const deleteContacts = id => {
    dispatch(delContacts(id));
    Notify.success('Contact successfully deleted.');
  };

  return (
    <List>
      {contacts.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          deleteContacts={deleteContacts}
        />
      ))}
    </List>
  );
};


