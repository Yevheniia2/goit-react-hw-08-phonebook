import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./../ContactForm/ContactForm";
import ContactList from "./../ContactList/ContactList";
import FilterForm from "./../FilterForm/FilterForm";
import { AppContainer } from "./App.styled";
import { Loader } from './../Loader/Loader';
import { Error } from './../Error/Error';
import {
  selectContacts,
  selectLoading,
  selectError,
} from './../../redux/selectors';

import { fetchContacts } from './../../redux/operations';

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
    {error 
    ? (<Error message={error} />) 
    : (<AppContainer>
          <ContactForm />
          {isLoading && <Loader />}
          {contacts.length > 1 && !error && <FilterForm />}
          {contacts.length > 0 && !error 
          ? (<ContactList />) 
          : (<p>Your phonebook still has no contacts. Please, add it.</p>)
          }
        </AppContainer>
      )
    }
    </>
  );
}