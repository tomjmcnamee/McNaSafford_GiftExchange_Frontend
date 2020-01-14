import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import  GridBuilder  from './GridBuilder'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class MyEvents extends React.Component {

  state = {
    create_event: false,
    event_name: "",
    event_date: ""
  }

  componentDidMount() {

}


  formChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  newEventFormSubmitHandler = (event) => {
    event.preventDefault()
    let newEvent = {event_name: this.state.event_name, event_date: this.state.event_date, event_managing_user_id: this.props.primaryUser.id}
    this.props.addEvent(newEvent, this.props.primaryUser.id)
    this.setState({
      event_name: "",
      event_date: "",
      create_event: false
    })
  }

  createEvent = (event) => {
    event.preventDefault()
    this.setState({
      create_event: true
    })
  }

  render() {
    let eventsIveCreated
    if (this.props.activeUserManagedEvents.length > 0) {
      eventsIveCreated = <GridBuilder gridType="EventsIveCreated" gridLinesArray={this.props.activeUserManagedEvents} history={this.props.history}/>
    } else {
      eventsIveCreated = []
    }
    
    let eventsImAttending
    if (this.props.activeUserGiverEventOBJsArr.length > 0) {
      eventsImAttending = <GridBuilder gridType="EventsImAttending" gridLinesArray={this.props.activeUserGiverEventOBJsArr} history={this.props.history}/>
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
          {this.state.create_event === false 
          ? 
            <button onClick={this.createEvent} >Create New Event</button> 
          : 
            <form onSubmit={this.newEventFormSubmitHandler}>
              <h5>Event Name: <input type="text" required name="event_name" fluid icon='user' iconPosition='left' value={this.state.event_name} onChange={this.formChangeHandler}/></h5>
              <h5>Event Name: <input type="date" required name="event_date" fluid icon='user' iconPosition='left' value={this.state.event_date} onChange={this.formChangeHandler}/></h5>
              <button type="submit" >Save New Event</button>
            </form>
            }
        </div>
        <br />
        <div id="MyEventsGrid">
          <h3>Events I'm attending</h3>
            {eventsImAttending}
        </div>
      </div>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    addEvent: (newEvent, primaryUserID) => dispatch(addEvent(newEvent, primaryUserID))
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