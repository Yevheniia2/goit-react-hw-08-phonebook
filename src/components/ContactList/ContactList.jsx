import { ContactListUl, ContactListLi, ItemButton, ItemParagraph } from "./ContactList.styled";
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from './../../redux/selectors';
import { deleteContact } from "./../../redux/operations";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));
  
    return (
      <ContactListUl >
        {contacts.map(({name, id, number}) => (
            <ContactListLi key={id} id={id}>
              <ItemParagraph>{name + ':' + number}</ItemParagraph>
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