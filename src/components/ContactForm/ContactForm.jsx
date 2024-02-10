import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { selectContacts } from './../../redux/selectors';
import { addContact } from "./../../redux/operations";

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  
  // const { value } = event.currentTarget;
  // event.currentTarget.name === 'name' ? setName(value) : setPhone(value);
};

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };

  const checkName = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),);
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const name = formElement.name.value;
    const number = formElement.number.value;
      const inputContact = { 
        name, 
        number, 
        id: nanoid() 
      };

    if (checkName(name)) {
      alert(`this name: ${name} is already in your contacts!`);
    } else if (checkNumber(number)) {
      alert(`this number: ${number} is already in your contacts!`);
    } else {
      dispatch(addContact(inputContact));
    }
    resetName();
    resetNumber();
  };


    return (
        <FormBox onSubmit={ handleSubmit }>
            <FormLabel>
                <FormParagraph>Name</FormParagraph>
                <FormInput
                    onChange={ handleChange }
                    type="text"
                    name="name"
                    pattern="[^'\x22]+"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                />
            </FormLabel>
            <FormLabel> 
                <FormParagraph>Phone number</FormParagraph>
                <FormInput
                    onChange={ handleChange }
                    type="tel"
                    name="number"
                    pattern="[^'\x22]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                />
            </FormLabel>
            <FormButton>Add contact</FormButton>
        </FormBox>
    );
}