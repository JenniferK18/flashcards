import React, { Fragment, Component } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Deck from './Deck';
import { receiveDecks } from '../actions'
import { connect } from 'react-redux';
import StyleButton from './StyleButton'

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
    const { navigation } = this.props
    return <Deck { ...item } navigation={navigation}/>;
  };

  render() {
    const { decks } = this.props
    const dataArr = Object.keys(decks).map((key) => ({ deckName: key, cards: decks[key].cards, key }) )
    return (
      <Fragment>
        <StyleButton
          onPress={this.toNewDeck}
          text='Create a New Deck'
        />
        <Text>Your Decklist</Text>
        <View>
          <FlatList
            data={dataArr}
            renderItem={this.renderItem}
          />
        </View>
      </Fragment>
    );
  }
};

function mapStateToProps (state) {
  return { 
    decks: state.decks
  };
}

export default connect(mapStateToProps)(DeckList);
