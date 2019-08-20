import React, {Fragment} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';

const data = [
  {
    deckName: 'test',
    cards: [
      { question: 'question', answer: 'answer' }
    ]
  }
];

const DeckList = ({
  decks, navigation
}) => {

  toNewDeck = () => {
    navigation.navigate('NewDeck')
  }

  renderItem = ({ item }) => {
    return <Deck { ...item } />;
  };

  return (
    <Fragment>
      <TouchableOpacity
        onPress={this.toNewDeck}
      >
        <Text>Create a New Deck</Text>
      </TouchableOpacity>
      <Text>Your Decklist</Text>
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
      </View>
    </Fragment>
  );
};

function mapStateToProps (decks) {
  return decks;
}

export default connect(mapStateToProps)(DeckList);
