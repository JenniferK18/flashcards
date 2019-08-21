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
  }

  componentDidMount() {
    const { fade } = this.state
    Animated.timing(fade, { toValue: 1,  duration: 3000 }).start();
  }

  addQuestion = () => {
    const { navigation, deckName } = this.props
    navigation.navigate('NewQuestion', { deckName })
  }

  startQuiz = () => {
    const { navigation, deckName } = this.props
    navigation.navigate('QuizView', { deckName })
  }

  render() {
    const { deckName, cards } = this.props
    const { fade } = this.state
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
      </Animated.View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const deckName = navigation.getParam('deckName')
  if (deckName) {
    return {
      cards: state[deckName].cards,
      deckName
    }
  }
  else return {}
}

export default connect(mapStateToProps)(DeckView)
