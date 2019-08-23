import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import StyleButton from './StyleButton'

class Card extends Component {
  state = {
    viewAnswer: false,
    markedAnswer: false,
    markedError: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.info !== this.props.info) {
      this.setState({
        viewAnswer: false,
        markedAnswer: false,
        markedError: false,
      })
    }
  }

  viewAnswer = () => {
    this.setState({
      viewAnswer: true
    })
  }

  markAnswer = (answer) => {
    const { markedAnswer } = this.state
    const { onAnswer } = this.props
    if(!markedAnswer) {
      this.setState({
        markedAnswer: true
      })
      onAnswer(answer)
    }
    else {
      this.setState({
        markedError: true
      })
    }
  }

  render() { 
    const { info, nextQuestion } = this.props
    const { viewAnswer, markedError } = this.state
    return (
      <View>
        <Text>Question: {info.question}</Text>
        {!viewAnswer ? (
          <StyleButton
            onPress={this.viewAnswer}
            text='View Answer'
          />
        ) : (
          <View>
            <Text>Answer: {info.answer}</Text>
            <StyleButton
              onPress={() => this.markAnswer('correct')}
              text='Correct'
            />
            <StyleButton
              onPress={() => this.markAnswer('incorrect')}
              text='Incorrect'
            />
            <StyleButton
              onPress={nextQuestion}
              text='Next Question'
            />
            { markedError && <Text>You have already marked this question's answer.</Text> }
          </View>
        )}
      </View>
    )
  }
}

export default Card
