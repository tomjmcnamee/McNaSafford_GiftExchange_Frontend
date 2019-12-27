import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// import CreateCampaignForm from './Components/CreateCampaignForm'

// import { autoLogIn, fetchCampaignFormDropdownOptions } from './actions'
import TopMenuBar from './Containers/TopMenuBar'
import homepage from './Containers/homepage'
import SignUp from './Components/Signup'
import LogIn from './Components/Login'
// import UserHome from './Components/UserHome'


class App extends React.Component {

  // AUTOLOGIN Check and Fetch


  componentDidMount(){
    document.title = "WeThePromo - Home Page"    
  }  // ends component did

  render() {
    return (
      <div className="App">
      <TopMenuBar history={this.props.history} />
      <nav id="topMenuLinks"> 
        <ul>
            <li><NavLink to="/UserHome">My Homepage</NavLink></li>
            <li><NavLink to="/viewwishlists"> View a wishlist</NavLink></li>
            <li><NavLink to="/mywishlist">Create a wishlist</NavLink></li>
            <li><NavLink to="/UserAdministration">User Administration</NavLink></li>
        </ul>
      </nav>
        {/* <Switch> */}
          <div id="content" >
            <Route path="/SignUp" component={SignUp} />
            <Route path='/LogIn' component={localStorage.token === undefined ? LogIn : null} />
            <Route exact path="/" component={homepage} />
  
          </div>     
        {/* </Switch> */}
      </div>
    ) //ends return
  } // ends render
}  // ends App Class
export default App;
