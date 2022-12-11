import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Contact, Markup } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Markup>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactItem id={id} name={name} number={number} />
        </Contact>
      ))}
    </Markup>
  );
};
