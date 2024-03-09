import { RiContactsBookFill } from 'react-icons/ri';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container, Title, Span, SubTitle } from './App.styled';


export const App = () => {

  return (
    <Container>
      <RiContactsBookFill
        style={{ width: '100px', height: '100px', color: '#3373e2' }}
      />
      <Title>
        Phone<Span>book</Span>
      </Title>
      <ContactForm />
      <SubTitle>Contacts List</SubTitle>
      <ContactFilter />
      <ContactList />
    </Container>
  );
};
