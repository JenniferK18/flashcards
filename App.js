import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import DeckView from './components/DeckView'
import Card from './components/Card'
import reducer from './reducers'
import { setLocalNotification } from './utils'
import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
  DeckView: {
    screen: DeckView
  },
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  },
  NewDeck: {
    screen: NewDeck
  },
  QuizView: {
    screen: QuizView
  },
  NewQuestion: {
    screen: NewQuestion
  },
})

const data = [
  {
    deckName: 'test',
    cards: [
      {
        question: 'question',
        answer: 'answer',
      }
    ]
  }
];

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <Stack />
        </View>
      </Provider>
    )
  }
}

export default App
