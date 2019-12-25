
// let backendURL = "http://localhost:3000/api/v1/"
// let backendURL = "http://-----------backend.herokuapp.com/api/v1/"
let backendURL = process.env.REACT_APP_FETCH_LOCATION


function logAccountIn (path, accountCredentials, history) {
  return function (dispatch) {
    fetch(backendURL + path, {
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
          dispatch({ type: "LOG USER IN", payload: response.userObj })
          dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
          dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
          dispatch({ type: "LOGGED IN USERS FAVORITED CAMPAIGNS", payload: response.favoritedCampaigns[0] })
          history.push("/BrowseCampaigns")
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
            if (response.status === "error") {
              alert("incorrect email/password combination")
              history.push("/LogIn")
            } else {
              dispatch({ type: "AUTO LOG USER IN", payload: response.userObj })
              dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
              dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
              dispatch({ type: "LOGGED IN USERS FAVORITED CAMPAIGNS", payload: response.favoritedCampaigns[0] })
            }
        })
        .catch((error) => {
          console.log("autoLoginFETCHError", error)
        });
      }// ends IF statement about localstorage.token
    } // ends Thunk middlewear function
  } // END AutoLogIn function



  function signUp (userInfo, history) {
    return function (dispatch) {
    fetch(backendURL + "user_accounts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user_account: userInfo })
    })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          localStorage.setItem("token", response.token)
          dispatch({ type: "LOG USER IN", payload: response.userObj })
          dispatch({ type: "FETCH LOGGED IN USERS SUPPORTED CAMPAIGNS", payload: response.loggedInUserSupportedCampaignObjsArr })
          dispatch({ type: "FETCH LOGGED IN USERS CAMPAIGN CONTRIBUTION OBJS", payload: response.campaignContributionsOjbsArr })
          history.push("/BrowseCampaigns")
        }
      })
    }  // Ends SignUp THUNK function
  } // ends SignUp funciton

  function logOut (history) {
    return function (dispatch) {
      dispatch({ type: "LOG USER OUT", payload: {}})
      localStorage.removeItem("token")
      history.push("/about")
    } // ends Thunk dispatch function
  } // ends logOut function


export { 
        logAccountIn,
        autoLogIn,
        signUp,
        logOut,
      }