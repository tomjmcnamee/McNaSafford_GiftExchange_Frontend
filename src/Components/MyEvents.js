import React from 'react'
import { connect } from 'react-redux'
// import { switchActiveUser } from '../actions'
import  GridBuilder  from './GridBuilder'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class MyEvents extends React.Component {

  state = {
    event_name: "",
    event_date: ""
  }

  componentDidMount(){

  }

  formChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmitHandler = (event) => {
    event.preventDefault()
    this.props.addWishlistItem(this.props.activeUser.id, this.state, this.props.history)
    this.setState({
      event_name: "",
      event_date: ""
    })
  }

  render() {
    let eventsImManaging
    if (this.props.activeUserManagedEvents.length > 0) {
      eventsImManaging = <GridBuilder gridType={"ActiveUserManagedEvents"} gridLinesArray={this.props.activeUserManagedEvents} history={this.props.history}/>
    } else {
      eventsImManaging = []
    }
    

    return (
      <div id="MyHomepage">
        {/* <ManageOtherUsers /> */}
      </div>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 

  }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    loggedInAcct: state.loggedInAcct,
    activeUser: state.activeUser,
    primaryUser: state.primaryUser,
    activeUserManagedEvents: state.activeUserManagedEvents,
    activeUserGiverEventOBJsArr: state.activeUserGiverEventOBJsArr,
    activeUserGiverEventsGetterOBJsArr: state.activeUserGiverEventsGetterOBJsArr
  } 
}

export default connect(msp, mdp)(MyEvents) 