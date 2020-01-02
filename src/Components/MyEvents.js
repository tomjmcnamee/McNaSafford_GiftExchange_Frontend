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
    let eventsIveCreated
    if (this.props.activeUserManagedEvents.length > 0) {
      eventsIveCreated = <GridBuilder gridType="EventsGrid" gridLinesArray={this.props.activeUserManagedEvents} history={this.props.history}/>
    } else {
      eventsIveCreated = []
    }
    
    let eventsImAttending
    if (this.props.activeUserGiverEventOBJsArr.length > 0) {
      eventsImAttending = <GridBuilder gridType="EventsGrid" gridLinesArray={this.props.activeUserGiverEventOBJsArr} history={this.props.history}/>
    } else {
      eventsImAttending = []
    }
    

    return (
      <div id="MyHomepage">
        <div className="TopAndCenter">
          <h1>My Events</h1>
        </div>
        <div>
          <h3>Events I've created</h3>
          {eventsIveCreated}
        </div>
        <br />
        <div>
          <h3>Events I'm attending</h3>
            {eventsImAttending}
        </div>


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