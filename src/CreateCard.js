// Create a card
import React from 'react';

class CreateCard extends React.Component {
  state = { name: '', answer: '', id: 0 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, answer, id } = this.state;
    this.setState({ id: id + 1});
    const card = { name, answer, id, hidden: true }
    this.props.addCard(card);
    this.setState({ name: '', answer: '' })
  }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, answer } = this.state;
    return(
      <form ref="form" onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} placeholder="Front of Card" autofocus='true' />
        <input name="answer" value={answer} onChange={this.handleChange} placeholder="Back of Card" />
        <button type="submit">Create Card</button>
      </form>
    )
  }
}

export default CreateCard;