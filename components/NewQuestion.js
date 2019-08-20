import React, { Component } from 'react';
import {
  Text,
  TextInput,
  KeyboardAvoidingView
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
    const { deckName, dispatch } = this.props;
    const { question } = this.state;
    dispatch(addQuestion({
      deckName,
      question
    }));
  }

  updateInput = (input) => {
    this.setState({
      input
    });
  }

  render() {
    const { question, answer } = this.state.question;

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Question: </Text>
        <TextInput
          value={question}
          onChangeText={this.updateInput}
        />
        <Text>Answer: </Text>
        <TextInput
          value={answer}
          onChangeText={this.updateInput}
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
