import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
