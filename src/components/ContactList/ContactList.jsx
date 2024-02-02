import { ContactListUl, ContactListLi, ItemButton, ItemParagraph } from "./ContactList.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from './../../redux/selectors';
import { deleteContact } from "./../../redux/operations";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));
  
    return (
      <ContactListUl >
        {contacts.map(({name, id, phone}) => (
            <ContactListLi key={id} id={id}>
              <ItemParagraph>{name + ':' + phone}</ItemParagraph>
              <ItemButton
                type="button"
                onClick={() => onDeleteContact(id)}>
                Delete
              </ItemButton>
            </ContactListLi>
          ))}
      </ContactListUl>
    );
  }