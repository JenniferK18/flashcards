import React, { Fragment, Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Deck from './Deck';
import { receiveDecks } from '../actions'
import { connect } from 'react-redux';

class DeckList extends Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(receiveDecks())
  }

  toNewDeck = () => {
    const { navigation } = this.props
    navigation.navigate('NewDeck')
  }

  renderItem = ({ item }) => {
    return <Deck { ...item } />;
  };

  render() {
    const { decks } = this.props
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
  }
};

function mapStateToProps (decks) {
  return decks;
}

export default connect(mapStateToProps)(DeckList);
