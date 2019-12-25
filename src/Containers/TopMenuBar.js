import React from 'react'
import { connect } from 'react-redux'
import { logOut, autoLogIn } from '../actions'
import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

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
    if (this.props.loggedInUserObj === undefined || this.props.loggedInUserObj.id === undefined) {
      topButton =  <a href="/LogIn" > <button>Log In or Sign Up</button> </a>
    } else {
        topButton = <button onClick={this.logOutHandler}  >Log Out</button> 
    } 
  
    return (
      <header id="pageHeader">
        <div className="ui grid" >
          <div className="six wide column"  >
            <a href="/"><img id="wtp_logo" src={TopIcon} alt="We The Promo.com" /></a>
          </div>
          <div className="four wide column"  >
            <h1 style={{color: "red"}}>This site is still under development!</h1>
          </div>
          <div className="six wide column"  >
            <div id="userNameAndbutton">
              {this.props.loggedInUserObj === undefined || this.props.loggedInUserObj.id === undefined ? null : <h1 id="welcomeBackInHeader" >Welcome back, {this.props.loggedInUserObj.first_name} </h1>}
              {topButton}
            </div>
          </div>
        </div>
      </header>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    logOut: (arg1) => dispatch(logOut(arg1)),
    autoLogIn: () => dispatch(autoLogIn())}
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { loggedInUserObj: state.loggedInUserObj} 
}

export default connect(msp, mdp)(TopMenuBar) 