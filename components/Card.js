import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

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
          <TouchableOpacity
            onPress={this.viewAnswer}
          >
            <Text>View Answer</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <Text>Answer: {info.answer}</Text>
            <TouchableOpacity
              onPress={() => this.markAnswer('correct')}
            >
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.markAnswer('incorrect')}
            >
              <Text>Incorrect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextQuestion}
            >
              <Text>Next Question</Text>
            </TouchableOpacity>
            { markedError && <Text>You have already marked this question's answer.</Text> }
          </View>
        )}
      </View>
    )
  }
}

export default Card
