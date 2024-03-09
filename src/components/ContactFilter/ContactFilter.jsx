import { useDispatch, useSelector } from 'react-redux';
import { RiSearchLine } from 'react-icons/ri';
import { Input, Label } from './ContactFilter.styled';
import { onFilter } from 'store/filterSlice';
import { getFilter } from 'store/selectors';

export const ContactFilter = () => {

  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const findContacts = e => {
    dispatch(onFilter(e.target.value));
  };

  return (
    <Label>
      <RiSearchLine style={{ color: '#3373e2' }} />
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={findContacts}
        pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
  );
};

