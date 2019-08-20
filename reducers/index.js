import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function decks(state = {}, action) {
  // console.log(JSON.stringify(state))
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          cards: state[action.deckName].cards.concat(action.question)
        }
      }
    default :
      return state
  }
}

export default decks