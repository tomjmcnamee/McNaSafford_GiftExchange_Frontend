import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// import CreateCampaignForm from './Components/CreateCampaignForm'

// import { autoLogIn, fetchCampaignFormDropdownOptions } from './actions'
import TopMenuBar from './Containers/TopMenuBar'
import homepage from './Containers/homepage'
import SignUp from './Components/Signup'
import LogIn from './Components/Login'
import MyWishlist from './Components/MyWishlist'
import UserAdministration from './Components/UserAdministration'
import MyEvents from './Components/MyEvents'
import EventDetails from './Components/EventDetails'
// import UserHome from './Components/UserHome'


class App extends React.Component {

  // AUTOLOGIN Check and Fetch


  componentDidMount(){
    document.title = "McNaSafford - Home Page"    
  }  // ends component did

  render() {
    return (
      <div className="App">
      <TopMenuBar history={this.props.history} />
      <div className="ui grid" >
        <div className="four wide column"  >
          {!!this.props.loggedInAcct.id  
          ?
            <nav id="topMenuLinks"> 
              <ul>
                  {/* <li><NavLink to="/MyHomepae">My Homepage</NavLink></li> */}
                  <li><NavLink to="/mywishlist"> My Wishlist</NavLink></li>
                  <li><NavLink to="/myevents">My Events</NavLink></li>
                  <li><NavLink to="/UserAdministration">User Administration</NavLink></li>
              </ul>
            </nav>
          :
           null
          }
        </div >
        <div className="twelve wide column"  >
        {/* <Switch> */}
          <div id="content" >
            <Route path="/SignUp" component={SignUp} />
            <Route path='/LogIn' component={(localStorage.token === undefined || localStorage.token === "undefined" ) ? LogIn : null} />
            <Route exact path='/mywishlist' component={MyWishlist} />
            <Route exact path='/useradministration' component={UserAdministration} />
            <Route exact path='/myevents' component={MyEvents} />
            <Route exact path='/EventDetails' component={EventDetails} />
            <Route exact path="/" component={homepage} />
          </div>     
        {/* </Switch> */}
        </div >


      </div>
      
      </div>
    ) //ends return
  } // ends render
}  // ends App Class



function mdp(dispatch) {
  return { 
    // addEvent: (newEvent, primaryUserID) => dispatch(addEvent(newEvent, primaryUserID))
  }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    loggedInAcct: state.loggedInAcct,
  } 
}

export default connect(msp, mdp)(App) 

