import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.decks
        }
      }
    case ADD_DECK:
      return {    
        ...state,    
        decks: {
          ...state.decks,
          ...action.deck
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckName]: {
            ...state.decks[action.deckName],
            cards: state.decks[action.deckName].cards.concat(action.question)
          }
        }
      }
    default :
      return state
  }

}

export default decks