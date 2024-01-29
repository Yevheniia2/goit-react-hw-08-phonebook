import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import { FormBox, FormParagraph, FormInput, FormButton, FormLabel } from "./ContactForm.styled";
import { selectContacts } from './../../redux/selectors';
import contactsOperations from './../../redux/operations';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    
    switch (name) {
      case 'name':
        setName(name);
        break;

      case 'phone':
        setPhone(phone);
        break;

      default:
        return;
    }
  };

  // const resetName = () => {
  //   setName('');
  // };

  // const resetPhone = () => {
  //   setPhone('');
  // };

  const checkName = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),);
  };

  const checkPhone = phone => {
    return contacts.find(contact => contact.phone === phone);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target;
    const contact = { 
      name: name.value,
      phone: phone.value
    };

    if (checkName(name)) {
      alert(`this name: ${name} is already in your contacts!`);
    } else if (checkPhone(phone)) {
      alert(`this number: ${phone} is already in your contacts!`);
    } else {
      dispatch(contactsOperations.addContact( contact ));
    }
    e.target.reset();
    // resetName();
    // resetPhone();
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
                    name="phone"
                    pattern="[^'\x22]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                />
            </FormLabel>
            <FormButton>Add contact</FormButton>
        </FormBox>
    );
}