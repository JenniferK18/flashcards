import React, { Component } from 'react'
import {
  View,
} from 'react-native'

class Card extends Component {
  state = {
    viewAnswer: false,
  }

  viewAnswer = () => {
    this.setState({
      viewAnswer: true
    })
  }

  render() { 
    const { info, nextQuestion, onAnswer } = this.props
    const { viewAnswer } = this.state
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
                onPress={onAnswer('correct')}
              >
                <Text>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onAnswer('incorrect')}
              >
                <Text>Incorrect</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={nextQuestion}
              >
                <Text>Next Question</Text>
              </TouchableOpacity>
            </View>
        )}
      </View>
    )
  }
}

export default Card
