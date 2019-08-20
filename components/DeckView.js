import React, { Component } from 'react'
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
    const { navigation } = this.props
    navigation.navigate('NewQuestion', { deckName })
  }

  startQuiz = () => {
    const { navigation } = this.props
    navigation.navigate('QuizView', { deckName })
  }

  render() {
    const { deckName, cards } = this.props
    const { fade } = this.state
    return (
      <Animated.View style={{ opacity: fade }}>
        <Text>{deckName} - {cards.length} cards</Text>
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
  return {
    cards: state[deckName].cards,
    deckName
  }
}

export default connect(mapStateToProps)(DeckView)
