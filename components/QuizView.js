import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils'
import Card from './Card'
import StyleButton from './StyleButton'

class QuizView extends Component {

  state = {
    quizCompleted: false,
    question: 0,
    correctAnswers: 0,
  }
  
  nextQuestion = () => {
    const { cards } = this.props
    this.setState((prevState) => {
      if(prevState.question + 1 < cards.length)
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
    const { deckName, navigation } = this.props 
    navigation.navigate('DeckView', { deckName })
  }

  render() {
    const { question, correctAnswers, quizCompleted } = this.state
    const { cards } = this.props
    return (
      <View>
        { !quizCompleted ?
          <View>
            <Text>{cards && cards.length - question} question(s) remaining</Text>
            <Card info={cards && cards[question]} nextQuestion={this.nextQuestion} onAnswer={this.markAnswer}/>
          </View>
        : 
          <View>
            <Text>Score: {correctAnswers} / {cards.length} </Text>
            <StyleButton
              onPress={this.restartQuiz}
              text='Restart Quiz'
            />
            <StyleButton
              onPress={this.toDeckView}
              text='Back to Deck'
            />
          </View>
        }
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const deckName = navigation.getParam('deckName')
  if(deckName) {
    return {
      cards: state.decks[deckName].cards,
      deckName
    }
  }
  else return {}
}

export default connect(mapStateToProps)(QuizView)
