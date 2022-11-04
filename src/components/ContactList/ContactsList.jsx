export const ContactList = ({ contactsArr, onDelitContact }) => {
  return contactsArr.map(({ id, name, number }) => (
    <ul>
      <li key={id}>
        <p> {name} </p>
        <p>{number}</p>
        <button onClick={() => onDelitContact(id)}>Delite</button>
      </li>
    </ul>
  ));
};
