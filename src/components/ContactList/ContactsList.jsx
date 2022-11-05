import { PropTypes } from 'prop-types';

export const ContactList = ({ contactsArr, onDelitContact }) => {
  return contactsArr.map(({ id, name, number }) => (
    <ul>
      <li key={id}>
        <h2> {name} </h2>
        <p>{number}</p>
        <button onClick={() => onDelitContact(id)}>Delite</button>
      </li>
    </ul>
  ));
};

ContactList.propTypes = {
  requiredCard: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
