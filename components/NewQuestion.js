import React, { Component } from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { addQuestion } from '../actions';
import { connect } from 'react-redux';

class NewQuestion extends Component {

  state = {
    question: {
      question: '',
      answer: '',
    }
  }

  submitQuestion = () => {
    const { navigation, dispatch } = this.props;
    const { question } = this.state;
    const deckName = navigation.getParam('deckName')
    dispatch(addQuestion({
      deckName,
      question
    }));
    navigation.navigate('DeckView', { deckName })
  }

  updateInput = (input, type) => {
    type === 'question' ?
    this.setState((prevState) => ({
      question: {
        ...prevState.question,
        question: input
      }
    }))
    : 
    this.setState((prevState) => ({
      question: {
        ...prevState.question,
        answer: input
      }
    }))
  }

  render() {
    const { question, answer } = this.state.question;
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Question: </Text>
        <TextInput
          value={question}
          onChangeText={(input) => this.updateInput(input, 'question')}
        />
        <Text>Answer: </Text>
        <TextInput
          value={answer}
          onChangeText={(input) => this.updateInput(input, 'answer')}
        />
        <TouchableOpacity
          onPress={this.submitQuestion}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
};

export default connect()(NewQuestion);
