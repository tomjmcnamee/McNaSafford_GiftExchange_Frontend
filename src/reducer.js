import { combineReducers } from 'redux'

let defaultState = {
    loggedInAcct: {},
    primaryUser: {},
    managingUsers: {},
    activeUser: {},
    activeUserWishList: {},
    activeUserManagedEvents: {},
    activeUserGiverEventOBJsArr: {},
    activeUserGiverEventsGetterOBJsArr: {}
}



function loggedInAccountReducer(state = defaultState.loggedInAcct, action) {
  switch (action.type) {
      case "LOG ACCOUNT IN":
          return action.payload
      case "AUTO LOG ACCOUNT IN":
          return action.payload
      case "LOG ACCOUNT OUT":
          return action.payload
      default:
          return state
  }
} // ends loggedInAccountReducer

function accountsPrimaryUserReducer(state = defaultState.primaryUser, action) {
  switch (action.type) {
      case "SET PRIMARY USER":
          return action.payload
      case "UNSET PRIMARY USER":
          return action.payload
      default:
          return state
  }
} // ends accountsPrimaryUserReducer

function managingUsersReducer(state = defaultState.managingUsers, action) {
  switch (action.type) {
      case "SET MANAGING USERS":
          return action.payload
      case "UNSET MANAGING USERS":
          return action.payload
      default:
          return state
  }
} // ends managingUsersReducer

function activeUserReducer(state = defaultState.activeUser, action) {
  switch (action.type) {
      case "SET ACTIVE USER":
          return action.payload
      case "UNSET ACTIVE USER":
          return action.payload
      default:
          return state
  }
} // ends activeUserReducer

function activeUserWishListReducer(state = defaultState.activeUserWishList, action) {
  switch (action.type) {
      case "SET ACTIVE USER WISH LIST":
          return action.payload
      case "UNSET ACTIVE USER WISH LIST":
          return action.payload
      default:
          return state
  }
} // ends activeUserWishListReducer

function activeUserManagedEventsReducer(state = defaultState.activeUserManagedEvents, action) {
  switch (action.type) {
      case "SET ACTIVE USER MANAGED EVENTS":
          return action.payload
      case "UNSET ACTIVE USER MANAGED EVENTS":
          return action.payload
      default:
          return state
  }
} // ends activeUserManagedEventsReducer

function activeUserGiverEventOBJsArrReducer(state = defaultState.activeUserManagedEvents, action) {
  switch (action.type) {
      case "SET ACTIVE USER GIVER EVENT OBJs ARR":
          return action.payload
      case "UNSET ACTIVE USER GIVER EVENT OBJs ARR":
          return action.payload
      default:
          return state
  }
} // ends activeUserGiverEventOBJsArrReducer

function activeUserGiverEventsGetterOBJsArrReducer(state = defaultState.activeUserGiverEventsGetterOBJsArr, action) {
  switch (action.type) {
      case "SET ACTIVE USER GIVER EVENTS GETTER OBJs ARR":
          return action.payload
      case "UNSET ACTIVE USER GIVER EVENTS GETTER OBJs ARR":
          return action.payload
      default:
          return state
  }
} // ends activeUserGiverEventsGetterOBJsArrReducer





let reducer = combineReducers({
  loggedInAcct: loggedInAccountReducer,
  primaryUser: accountsPrimaryUserReducer,
  managingUsers: managingUsersReducer,
  activeUser: activeUserReducer,
  activeUserWishList: activeUserWishListReducer,
  activeUserManagedEvents: activeUserManagedEventsReducer,
  activeUserGiverEventOBJsArr: activeUserGiverEventOBJsArrReducer,
  activeUserGiverEventsGetterOBJsArr: activeUserGiverEventsGetterOBJsArrReducer
})

export default reducer