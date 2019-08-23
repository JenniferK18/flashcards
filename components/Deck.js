import React from 'react'
import StyleButton from './StyleButton'

const Deck = ({
  deckName, cards, navigation
}) => {

  toDeckView = () => {
    navigation.navigate('DeckView', { deckName })
  }

  return (
    <StyleButton
      onPress={this.toDeckView}
      text={`${deckName} - ${cards.length} card(s)`}
    />
  )
}

export default Deck
