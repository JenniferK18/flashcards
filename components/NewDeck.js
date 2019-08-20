import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class NewDeck extends Component {

  state = {
    deckName: '',
  }

  updateInput = (input) => {
    this.setState({
      input
    });
  }

  submitDeck = () => {
    const { dispatch } = this.props;
    dispatch.addDeck({
      deckName,
      cards: [],
    });

    //TODO: redirect to the DeckView for this deck
  }

  render() {
    const { deckName } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Question: </Text>
        <TextInput
          value={deckName}
          onChangeText={this.updateInput}
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
