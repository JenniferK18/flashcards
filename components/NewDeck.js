import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import StyleButton from './StyleButton'

class NewDeck extends Component {

  state = {
    deckName: '',
    error: false,
  }

  updateInput = (input) => {
    this.setState({
      deckName: input
    });
  }

  submitDeck = () => {
    const { dispatch, navigation } = this.props;
    const { deckName } = this.state;
    if(deckName !== '') {
      dispatch(addDeck({
        [deckName]: { cards: [], }
      }));
      navigation.navigate('DeckView', { deckName })
      this.setState({
        error: false
      })
    }
    else 
      this.setState({
        error: true
      })
  }

  render() {
    const { deckName, error } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Enter Your New Deck Name: </Text>
        <TextInput
          value={deckName}
          onChangeText={this.updateInput}
        />
        <StyleButton
          onPress={this.submitDeck}
          text='Create Deck'
        />
        { error && <Text>You have not entered a deck name yet.</Text> }
      </KeyboardAvoidingView>
    );
  }
};

export default connect()(NewDeck);
