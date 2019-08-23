import React, { Component } from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { addQuestion } from '../actions';
import { connect } from 'react-redux';
import StyleButton from './StyleButton'

class NewQuestion extends Component {

  state = {
    question: {
      question: '',
      answer: '',
    },
    error: false
  }

  submitQuestion = () => {
    const { navigation, dispatch } = this.props;
    const { question } = this.state;
    const deckName = navigation.getParam('deckName')
    if (question.question !== '' && question.answer !== '') {
      dispatch(addQuestion(deckName, question));
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
    const { error } = this.state
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
        <StyleButton
          onPress={this.submitQuestion}
          text='Submit'
        />
        { error && <Text>You have not entered a valid question and answer yet.</Text>}
      </KeyboardAvoidingView>
    );
  }
};

export default connect()(NewQuestion);
