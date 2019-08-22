import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import reducer from './reducers'
import { setLocalNotification } from './utils'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Stack = createStackNavigator({
  
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView
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

const AppContainer = createAppContainer(Stack);

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
      <Provider store={createStore(reducer, { decks: {} })}>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}

export default App;
