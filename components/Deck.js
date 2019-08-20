import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'

const Deck = ({
  deckName, cards, navigation
}) => {

  toDeckView = () => {
    navigation.navigate('DeckView', { deckName })
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
