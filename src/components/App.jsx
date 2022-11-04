import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './FormComponent/FormComponent';
import { ContactList } from './ContactList/ContactsList';
export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    console.log(data);
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

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <ContactList
          contactsArr={contacts}
          onDelitContact={this.deliteContact}
        />
      </div>
    );
  }
}
