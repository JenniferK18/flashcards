import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Text,
  TouchableOpacity,
  Animated
} from 'react-native'

class DeckView extends Component {

  state = {
    fade: new Animated.Value(0),
    error: false,
  }

  componentDidMount() {
    const { fade } = this.state
    Animated.timing(fade, { toValue: 1,  duration: 3000 }).start();
  }

  addQuestion = () => {
    const { navigation, deckName } = this.props
    navigation.navigate('NewQuestion', { deckName })
    this.setState({
      error: false
    })
  }

  startQuiz = () => {
    const { navigation, deckName, cards } = this.props
    if(cards.length == 0) {
      this.setState({
        error: true
      })
    }
    else navigation.navigate('QuizView', { deckName })
  }

  render() {
    const { deckName, cards } = this.props
    const { fade, error } = this.state
    return (
      <Animated.View style={{ opacity: fade }}>
        {cards && <Text>{deckName} - {cards.length} cards</Text>}
        <TouchableOpacity
          onPress={this.addQuestion}
        >
          <Text>Add Question</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.startQuiz}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        {error && <Text>You have not added any questions to this deck yet.</Text>}
      </Animated.View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const deckName = navigation.getParam('deckName')
  if (deckName) {
    return {
      cards: state.decks[deckName].cards,
      deckName
    }
  }
  else return {}
}

export default connect(mapStateToProps)(DeckView)
