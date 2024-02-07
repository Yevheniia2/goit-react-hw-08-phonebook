import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './../../components/ContactList/ContactList';
import ContactForm from './../../components/ContactForm/ContactForm';
import FilterForm from './../../components/FilterForm/FilterForm';
import { selectContacts } from './../../redux/selectors';
import { fetchContacts } from './../../redux/operations';
import { ContactsPageBox, ContactsPageName, ContactsPageTitle } from './ContactsPage.styled';
import { FormParagraph } from 'components/ContactForm/ContactForm.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsPageBox>
      <ContactsPageTitle>Phonebook</ContactsPageTitle>
      <ContactForm />
      <ContactsPageName>Contacts</ContactsPageName>
      {contacts.length > 1 && (
        <FormParagraph>Find contacts by name</FormParagraph>
      )}
      <FilterForm />
      <ContactList />
    </ContactsPageBox>
  );
}