import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectorContacts, selectorFilter } from './../../redux/selectors';
import {
  ContactsItem,
  ContactsList,
  Name,
  Number,
  DelBtn,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <>
      <ContactsList>
        {visibleContacts().map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{phone}</Number>
              <DelBtn
                type="button"
                onClick={() => dispatch(deleteContact({ contactId: id }))}
              >
                Delete
              </DelBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
