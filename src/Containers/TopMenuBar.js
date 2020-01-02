import React from 'react'
import { connect } from 'react-redux'
import { logOut, autoLogIn, switchActiveUser } from '../actions'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class TopMenuBar extends React.Component {

  componentDidMount(){
    this.props.autoLogIn()
  }

  logOutHandler = () => {
    this.props.logOut(this.props.history)
  }
  render() {
    // Determine if Log In or Log Out button
    let topButton = ""
    if (this.props.loggedInAcct === undefined || this.props.loggedInAcct.id === undefined) {
      topButton =  <a href="/LogIn" > <button>Log In or Sign Up</button> </a>
    } else {
        topButton = <button onClick={this.logOutHandler}  >Log Out</button> 
    } 
  
    return (
      <header id="pageHeader">
        <div className="ui grid" >
          <div className="six wide column"  >
            {/* <a href="/"><img id="wtp_logo" src={TopIcon} alt="We The Promo.com" /></a> */}
          </div>
          <div className="four wide column"  >
            <h1 style={{color: "red"}}>This site is still under development!</h1>
          </div>
          <div className="six wide column"  >
            <div id="userNameAndbutton">
              {this.props.loggedInAcct === undefined || this.props.loggedInAcct.id === undefined ? null : <h1 id="welcomeBackInHeader" >Welcome back, {this.props.primaryUser.first_name} </h1>}
              {this.props.primaryUser.id === this.props.activeUser.id ? null : <h4 id="emulatingUserString" style={{color: "red"}}>You are logged in as <b>{this.props.activeUser.first_name + " " + this.props.activeUser.last_name}</b>. </h4>}
              {topButton}
              {this.props.primaryUser.id === this.props.activeUser.id ? null : <button onClick={() => this.props.switchActiveUser(this.props.primaryUser)}  >switch back to yourself</button>}
            </div>
          </div>
        </div>
      </header>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    logOut: (arg1) => dispatch(logOut(arg1)),
    autoLogIn: () => dispatch(autoLogIn()),
    switchActiveUser: (primaryUser) => dispatch(switchActiveUser(primaryUser)),
  }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    loggedInAcct: state.loggedInAcct,
    primaryUser: state.primaryUser,
    activeUser: state.activeUser,
  } 
}

export default connect(msp, mdp)(TopMenuBar) 