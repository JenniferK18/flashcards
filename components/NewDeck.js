import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class NewDeck extends Component {

  state = {
    deckName: '',
  }

  updateInput = (input) => {
    this.setState({
      deckName: input
    });
  }

  submitDeck = () => {
    const { dispatch, navigation } = this.props;
    const { deckName } = this.state;
    dispatch(addDeck({
      deckName,
      cards: [],
    }));

    navigation.navigate('DeckView', { deckName })
  }

  render() {
    const { deckName } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Question: </Text>
        <TextInput
          value={deckName}
          onChange={this.updateInput}
        />
        <TouchableOpacity
          onPress={this.submitDeck}
        >
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
};

export default connect()(NewDeck);
