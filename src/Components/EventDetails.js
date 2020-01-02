import React from 'react'
import { connect } from 'react-redux'
// import { switchActiveUser } from '../actions'
import  GridBuilder  from './GridBuilder'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class EventDetails extends React.Component {

  state = {
    userWishList: ""
  }

  // componentDidMount(){

  // }

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

  exposeWishList = (userID) => {
    this.setState({
      userWishList: userID
    })
  }

  render() {
    let eventGiftGetters
    if (this.props.activeEventGiftGettersArr.length > 0) {
      eventGiftGetters = this.props.activeEventGiftGettersArr.map( user => <li className="changePoiterToFinger" onClick={() => this.exposeWishList(user.id)}>{user.first_name + " " + user.last_name}</li>)
    } else {
      eventGiftGetters = []
    }

    let selectedGetterWishListGrid
    let filteredWishList
    if (this.state.userWishList !== "" ) {
      filteredWishList = this.props.activeEventAllWishListItems.filter( item => item.user_id == this.state.userWishList )
      selectedGetterWishListGrid = <GridBuilder gridType="selectedGetterWishList" gridLinesArray={filteredWishList} history={this.props.history}/>
    } 
    

    return (
      <div id="EventDetails">
        <div className="TopAndCenter">
          <h1>{this.props.activeEvent.event_name}</h1>
        </div>
        <div>
          { this.props.activeEvent.event_managing_user_id === this.props.activeUser.id
            ?
              <h3>Since you are managing this Event, you also manage the below list of invitees. </h3>
            :
            null
          }
        </div>
        <br /><br />
        <div>
          <h3>Below are the names of people that will recieve gifts at this event.  Clicking on any name will expose the items on their wishlists that have not yet been purchased as gifts by other people.</h3>
          <ul>
            {eventGiftGetters}
            {this.state.userWishList !== "" ? selectedGetterWishListGrid : <h3>This user doesnt have a wishlist</h3>}
          </ul>
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
    activeUserGiverEventsGetterOBJsArr: state.activeUserGiverEventsGetterOBJsArr,
    activeEvent: state.activeEvent,
    activeEventGiftGettersArr: state.activeEventGiftGettersArr,
    activeEventAllWishListItems: state.activeEventAllWishListItems
  } 
}

export default connect(msp, mdp)(EventDetails) 