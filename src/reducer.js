import { combineReducers } from 'redux'

let defaultState = {
    loggedInAcct: {},
    primaryUser: {},
    managingUsers: {},
    allUserObjs: {},
    activeUser: {},
    activeUserWishList: {},
    activeUserManagedEvents: {},
    activeUserGiverEventOBJsArr: {},
    activeUserGiverEventsGetterOBJsArr: {},
    activeEvent: {},
    activeEventGiftGettersArr: {},
    activeEventAllWishListItems: {},
    activeEventInvitees: {}

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

function allUserObjsReducer(state = defaultState.allUserObjs, action) {
  switch (action.type) {
      case "SET ALL USERS":
          return action.payload
      case "UNSET MANAGING USERS":
          return action.payload
      default:
          return state
  }
} // ends allUserObjsReducer

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

function activeEventReducer(state = defaultState.activeEvent, action) {
  switch (action.type) {
      case "SET ACTIVE EVENT":
          return action.payload
      case "UNSET ACTIVE EVENT":
          return action.payload
      default:
          return state
  }
} // ends activeEventReducer

function activeEventGiftGettersArrReducer(state = defaultState.activeEventGiftGettersArr, action) {
  switch (action.type) {
      case "SET ACTIVE EVENT GIFT GETTERS ARRAY":
          return action.payload
      case "UNSET ACTIVE EVENT GIFT GETTERS ARRAY":
          return action.payload
      default:
          return state
  }
} // ends activeEventGiftGettersArrReducer

function activeEventAllWishListItemsReducer(state = defaultState.activeEventAllWishListItems, action) {
  switch (action.type) {
      case "SET ACTIVE EVENT WISH LIST ITEMS":
          return action.payload
      case "UNSET ACTIVE EVENT WISH LIST ITEMS":
          return action.payload
      default:
          return state
  }
} // ends activeEventAllWishListItemsReducer

function activeEventInviteesReducer(state = defaultState.activeEventInvitees, action) {
  switch (action.type) {
      case "SET ACTIVE EVENT INVITEES LIST":
          return action.payload
      case "UNSET ACTIVE EVENT INVITEES LIST":
          return action.payload
      default:
          return state
  }
} // ends activeEventInviteesReducer





let reducer = combineReducers({
  loggedInAcct: loggedInAccountReducer,
  primaryUser: accountsPrimaryUserReducer,
  managingUsers: managingUsersReducer,
  allUserObjs: allUserObjsReducer,
  activeUser: activeUserReducer,
  activeUserWishList: activeUserWishListReducer,
  activeUserManagedEvents: activeUserManagedEventsReducer,
  activeUserGiverEventOBJsArr: activeUserGiverEventOBJsArrReducer,
  activeUserGiverEventsGetterOBJsArr: activeUserGiverEventsGetterOBJsArrReducer,
  activeEvent: activeEventReducer,
  activeEventGiftGettersArr: activeEventGiftGettersArrReducer,
  activeEventAllWishListItems: activeEventAllWishListItemsReducer,
  activeEventInvitees: activeEventInviteesReducer
})

export default reducer