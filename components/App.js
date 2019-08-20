import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DeckList from './DeckList'
import reducer from './reducers'
import { setLocalNotification } from '../utils'

class App extends Component () {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <DeckList />
        </View>
      </Provider>
    )
  }
}

export default App
