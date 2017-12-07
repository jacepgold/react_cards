// Edit a card
import React from 'react';

class EditCard extends React.Component {
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input defaultValue={question} />
        <input defaultValue={answer} />
        <button type="button" onClick={this.toggleEdit}>Cancel</button>
        <button>Save></button>
      </form>
    )
  }
}

export default EditCard;