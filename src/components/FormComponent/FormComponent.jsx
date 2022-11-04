import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Please, enter your Name"
          />
        </label>
        <label>
          Number
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            placeholder="Please, enter your Number"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
