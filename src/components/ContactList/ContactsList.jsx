import { PropTypes } from 'prop-types';
import {
  SectionList,
  SectionLi,
  ContactTitle,
  ContactTel,
  ContactButton,
} from './ContactList.styled';

export const ContactList = ({ contactsArr, onDelitContact }) => {
  return contactsArr.map(({ id, name, number }) => (
    <SectionList>
      <SectionLi key={id}>
        <ContactTitle> {name} </ContactTitle>
        <ContactTel href="tel {number}">{number}</ContactTel>
        <ContactButton onClick={() => onDelitContact(id)}>Delite</ContactButton>
      </SectionLi>
    </SectionList>
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
