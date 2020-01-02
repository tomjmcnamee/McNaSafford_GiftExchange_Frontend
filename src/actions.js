
// let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://-----------backend.herokuapp.com/api/v1/"
let backendURL = process.env.REACT_APP_FETCH_LOCATION


function logAccountIn (accountCredentials, history) {
  return function (dispatch) {
    fetch(backendURL + "login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(accountCredentials)
    })
    .then(resp => resp.json())
    .then(response => {
        if (!!response.error) {
          alert("incorrect email/password combination")
          history.push("/LogIn")
        } else {
          localStorage.setItem("token", response.token)
          dispatch({ type: "LOG ACCOUNT IN", payload: response.loggedInAcct })
          dispatch({ type: "SET PRIMARY USER", payload: response.primaryUser })
          dispatch({ type: "SET MANAGING USERS", payload: response.managingUsers })
          dispatch({ type: "SET ACTIVE USER", payload: response.primaryUser })
          dispatch({ type: "SET ACTIVE USER WISH LIST", payload: response.activeUserWishList })
          dispatch({ type: "SET ACTIVE USER MANAGED EVENTS", payload: response.activeUserManagedEvents })
          dispatch({ type: "SET ACTIVE USER GIVER EVENT OBJs ARR", payload: response.activeUserGiverEventOBJsArr })
          dispatch({ type: "SET ACTIVE USER GIVER EVENTS GETTER OBJs ARR", payload: response.activeUserGiverEventsGetterOBJsArr })
          history.push("/")
        }
      })
      .catch((error) => {
        console.log("Log Users In action Error - ", error)
      });
    }
  } // END LogAccountIn function

  function autoLogIn (history) {
    return function (dispatch) {
      if(localStorage.token == undefined || localStorage.token == "undefined"){
      }else{
        let token = localStorage.token
        fetch( backendURL + "autologin", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(response => {
            if (!!response.error) {
              localStorage.removeItem("token")
              history.push("/LogIn")
            } else {
              dispatch({ type: "AUTO LOG ACCOUNT IN", payload: response.loggedInAcct })
              dispatch({ type: "SET PRIMARY USER", payload: response.primaryUser })
              dispatch({ type: "SET MANAGING USERS", payload: response.managingUsers })
              dispatch({ type: "SET ACTIVE USER", payload: response.primaryUser })
              dispatch({ type: "SET ACTIVE USER WISH LIST", payload: response.activeUserWishList })
              dispatch({ type: "SET ACTIVE USER MANAGED EVENTS", payload: response.activeUserManagedEvents })
              dispatch({ type: "SET ACTIVE USER GIVER EVENT OBJs ARR", payload: response.activeUserGiverEventOBJsArr })
              dispatch({ type: "SET ACTIVE USER GIVER EVENTS GETTER OBJs ARR", payload: response.activeUserGiverEventsGetterOBJsArr })    
            }
        })
        .catch((error) => {
          console.log("autoLoginFETCHError", error)
        });
      }// ends IF statement about localstorage.token
    } // ends Thunk middlewear function
  } // END AutoLogIn function



  function signUp (user, account, history) {
    return function (dispatch) {
    fetch(backendURL + "accounts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ account: account, user: user })
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          localStorage.setItem("token", response.token)
          dispatch({ type: "LOG ACCOUNT IN", payload: response.loggedInAcct })
          dispatch({ type: "SET PRIMARY USER", payload: response.primaryUser })
          dispatch({ type: "SET ACTIVE USER", payload: response.primaryUser })
          history.push("/mywishlist")
        }
      })
    }  // Ends SignUp THUNK function
  } // ends SignUp funciton

  function logOut (history) {
    return function (dispatch) {
      dispatch({ type: "LOG ACCOUNT OUT", payload: {}})
      dispatch({ type: "UNSET PRIMARY USER", payload: {}})
      dispatch({ type: "UNSET MANAGING USERS", payload: {}})
      dispatch({ type: "UNSET ACTIVE USER", payload: {}})
      dispatch({ type: "UNSET ACTIVE USER WISH LIST", payload: {}})
      dispatch({ type: "UNSET ACTIVE USER MANAGED EVENTS", payload: {}})
      dispatch({ type: "UNSET ACTIVE USER GIVER EVENT OBJs ARR", payload: {}})
      dispatch({ type: "UNSET ACTIVE USER GIVER EVENTS GETTER OBJs ARR", payload: {}})
      localStorage.removeItem("token")
      history.push("/")
    } // ends Thunk dispatch function
  } // ends logOut function

  function addWishlistItem (userID, itemDetails, history) {
    return function (dispatch) {
      fetch(backendURL + "wishlist", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ wishlistItem: itemDetails, userID})
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          dispatch({ type: "SET ACTIVE USER WISH LIST", payload: response.activeUserWishList })
          // history.push("/")
        }
      })
    } // ends Thunk dispatch function
  } // ends addWishlistItem

  function removeItemFromWishlist (wishlistItemID, userID) {
    return function (dispatch) {
      fetch(backendURL + "wishlist", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ wishlistItemID, userID})
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          dispatch({ type: "SET ACTIVE USER WISH LIST", payload: response.activeUserWishList })
          // history.push("/")
        }
      })      
    } // ends Thunk dispatch function
  } // ends removeItemFromWishlist

  function switchActiveUser (userObj) {
    return function (dispatch) {
      fetch( backendURL + "switchUser/" + userObj.id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          // body: JSON.stringify({ userID: userObj.id })
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.status === "error") {
            console.log("error: here's response: ", response)
          } else {
            console.log("TEST - response from Fetch: ", response)
            dispatch({ type: "SET ACTIVE USER", payload: userObj })
            dispatch({ type: "SET ACTIVE USER WISH LIST", payload: response.activeUserWishList })
            dispatch({ type: "SET ACTIVE USER MANAGED EVENTS", payload: response.activeUserManagedEvents })
            dispatch({ type: "SET ACTIVE USER GIVER EVENT OBJs ARR", payload: response.activeUserGiverEventOBJsArr })
            dispatch({ type: "SET ACTIVE USER GIVER EVENTS GETTER OBJs ARR", payload: response.activeUserGiverEventsGetterOBJsArr })    
          }
      })
      .catch((error) => {
        console.log("autoLoginFETCHError", error)
      });
    } // ends Thunk dispatch function
  } // ends switchActiveUser

  function setActiveEvent (eventObj, history) {
    return function (dispatch) {
      fetch( backendURL + "event", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          EventID: eventObj.id
        }
      })
        .then(resp => resp.json())
        .then(response => {
          if (response.status === "error") {
            console.log("error: here's response: ", response)
          } else {
            console.log("TEST - response from Fetch: ", response)
            dispatch({ type: "SET ACTIVE EVENT GIFT GETTERS ARRAY", payload:  response.eventGettersUserOBJsArr })
            dispatch({ type: "SET ACTIVE EVENT WISH LIST ITEMS", payload:  response.eventWishLists })
            dispatch({ type: "SET ACTIVE EVENT", payload:  eventObj })
            history.push("/EventDetails")
          }
      })
      .catch((error) => {
        console.log("autoLoginFETCHError", error)
      });
    } // ends Thunk dispatch function
  } // ends setActiveEvent

export { 
        logAccountIn,
        autoLogIn,
        signUp,
        logOut,
        addWishlistItem,
        removeItemFromWishlist,
        switchActiveUser,
        setActiveEvent,
      }