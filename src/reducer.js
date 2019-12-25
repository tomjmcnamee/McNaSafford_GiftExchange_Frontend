import { combineReducers } from 'redux'

let defaultState = {
    formsDropDownOptionsHash: {
      sentimentIDsandDescriptions: [], 
      promotionTypesIDsandDescriptions: [], 
      promotionSubTypesIDsandDescriptions: [], 
      intendedGeographicReachIDsandDescriptions: [],
      cityIDsNameandStateID: [],
      stateIDsandName: []
    },
    loggedInAccountObj: {},
}



function loggedInAccountReducer(state = defaultState.loggedInAccountObj, action) {
  switch (action.type) {
      case "LOG USER IN":
          return action.payload
      case "AUTO LOG USER IN":
          return action.payload
      case "LOG USER OUT":
          return action.payload
      default:
          return state
  }
} // ends loggedInAccountReducer



let reducer = combineReducers({
  loggedInAccountObj: loggedInAccountReducer,
})

export default reducer