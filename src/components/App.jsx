import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './FormComponent/FormComponent';
import { ContactList } from './ContactList/ContactsList';
import { Filter } from './FiltrComponent/FiltrCompomemt';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const contactList = {
      name: data.name,
      number: data.number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contactList, ...prevState.contacts],
    }));
  };

  deliteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactId
      ),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <ContactList
          contactsArr={visibleContacts}
          onDelitContact={this.deliteContact}
        />
        <Filter value={filter} onFilterChange={this.onFilterChange} />
      </div>
    );
  }
}
