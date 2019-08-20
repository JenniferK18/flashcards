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
          <Card info={data} onAnswer={() => console.log('answered')} />
        </View>
      </Provider>
    )
  }
}



export default App
