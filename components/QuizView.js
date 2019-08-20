import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils'

class QuizView extends Component {

  state = {
    quizCompleted: false,
    question: 0,
    correctAnswers: 0,
  }
  
  nextQuestion = () => {
    this.setState((prevState) => {
      if(prevState.question + 1 > cards.length)
        return { question: prevState.question + 1 }
      else {
        clearLocalNotification()
          .then(setLocalNotification)
        return { quizCompleted: true }
      }
    })
  }

  markAnswer = (input) => {
    input === 'correct' &&
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1
      }))
  }

  restartQuiz = () => {
    this.setState({
      quizCompleted: false,
      question: 0,
      correctAnswers: 0,
    })
  }

  toDeckView = () => {
    // TODO: redirect to DeckView
  }

  render() {
    const { question, correctAnswers } = this.state
    const { deckName, cards } = this.props
    return (
      <View>
        { !quizCompleted ?
          <View>
            <Text>{cards.length - question} questions remaining</Text>
            <Card info={cards[question]} nextQuestion={this.nextQuestion} onAnswer={this.markAnswer}/>
          </View>
          : 
          <View>
            <Text>Score: {correctAnswers} / {cards.length} </Text>
            <TouchableOpacity
              onPress={this.restartQuiz}
            >
              <Text>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toDeckView}
            >
              <Text>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

function mapStateToProps (state, { deckName }) {
  return {
    cards: state[deckName].cards
  }
}

export default connect(mapStateToProps)(QuizView)
