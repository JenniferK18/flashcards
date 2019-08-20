import React from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'

const Deck = ({
  deckName, cards
}) => {

  toDeckView = () => {
    // TODO: redirect to DeckView with animation
  }

  return (
    <TouchableOpacity
      onPress={this.toDeckView}
    >
      <Text>{deckName} - {cards.length} cards</Text>
    </TouchableOpacity>
  )
}

export default Deck
