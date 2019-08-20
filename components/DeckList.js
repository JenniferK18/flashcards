import React, {Fragment} from 'react';
import {
  Text,
  FlatList
} from 'react-native';
import Deck from './Deck';
import { connect } from 'react-redux';

const data = [
  {
    deckName: 'test',
    cards: [
      {
        question: 'question',
        answer: 'answer',
      }
    ]
  }
];

const DeckList = () => {

  renderItem = ({ item }) => {
    return <Deck { ...item } />;
  };

  return (
    <Fragment>
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
  return { decks };
}

export default connect(mapStateToProps)(DeckList);
