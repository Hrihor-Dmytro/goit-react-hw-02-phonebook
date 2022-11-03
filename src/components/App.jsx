import { Component } from 'react';

export class App extends Component {
  state = {
    name: '',
    contacts: [],
  };

  handleInputChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
  };

  render() {
    console.log(Date.now());
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <label htmlFor="">
          Name
          <input
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <button> Add contact</button>
      </div>
    );
  }
}
