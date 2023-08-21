import { ContactItem, ContactList, DeleteBtn } from './Contact__List.styled';
import { BiBook } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectError, selectVisibleContacts } from 'redux/contacts/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const userFilteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {userFilteredContacts &&
        !error &&
        userFilteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BiBook style={{ color: 'blue', marginRight: '0' }} />
              {name}: {number}
              <DeleteBtn
                variant="contained"
                size="small"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
    </ContactList>
  );
};

export default ContactsList;
