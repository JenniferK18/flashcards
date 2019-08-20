import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const DeckView = ({
  deckName, cards
}) => {

  addQuestion = () => {
    // TODO: redirect to NewQuestion component, sending in deckName
  }

  startQuiz = () => {
    // TODO: redirect to QuizView component, sending in deckName
  }

  return (
    <View>
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
    </View>
  )
}

export default DeckView
