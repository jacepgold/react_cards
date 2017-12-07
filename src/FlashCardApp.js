// Cards
import React from 'react';
import CreateCard from './CreateCard';
// import EditCard from './EditCard';

class FlashCardApp extends React.Component {
  state = { cards: [] }

  addCard = (card) => {
    this.setState({ cards: [...this.state.cards, card] });
  }

  toggleAnswer = (id) => {
    let cards = this.state.cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          hidden: !card.hidden
        }
      }
      return card;
    });
    this.setState({ cards })
  }

  showAnswer(card, id) {
    if (card.hidden) {
      return(
        <div>
          <strong>Card is hidden</strong>
          <button onClick={() => this.toggleAnswer(id)}>Show Answer</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <strong>Answer: {card.answer}</strong>
          <button onClick={() => this.toggleAnswer(id)}>Hide Answer</button>
        </div>
      )   
    }
  }

  deleteCard(card, id) {
    delete this.state.cards[id];
    var cardsArray = this.state.people;
    var index = cardsArray(card.id);
    cardsArray.splice(id, 1);
    this.setState({ cards: cardsArray });;
  }

  render() {
    return(
      <div>
        <CreateCard addCard={this.addCard} />
        {this.state.cards.map((card, id) => { 
          return(
            <div key={id}>
              <h3><strong>{card.name}</strong></h3>
              { this.showAnswer(card, id) }
              <button>Edit Card</button>
              <button onClick={() => this.deleteCard(card, id)}>Delete Card</button>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

export default FlashCardApp;