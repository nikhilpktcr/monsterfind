import React, { Component } from 'react'
import './card.styles.css'

class Card extends Component {
  render() {
    const { cardData } = this.props;
    return (
      <div className='card-container' key={cardData.id}>
        <img alt={`monster ${cardData.name}`} src={`https://robohash.org/${cardData.id}?size=200x200&set=set2`}/>
        <h2>{cardData.name}</h2>
        <p>{cardData.email}</p>
      </div>
    )
  }
}

export default Card;
