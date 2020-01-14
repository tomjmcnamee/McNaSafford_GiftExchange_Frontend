import React from 'react'
import { connect } from 'react-redux'
// import { switchActiveUser } from '../actions'
import  GridBuilder  from './GridBuilder'
import { gatherAndSetAllUsers, addInviteeToEvent, addGiftGetterToEvent} from '../actions'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class EventDetails extends React.Component
 {

  state = {
    userIDofWishListToDisplay: "",
    showInvitableUsers: false,
    showPotentialGiftGetters: false,
    userIDtoAddAsInvitee: "",
    userIDtoAddAsGiftGetter: "",

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
    if (userID !== this.props.activeUser.id) {
      this.setState({
        userIDofWishListToDisplay: userID
      })
    } else {
      this.setState({
        userIDofWishListToDisplay: ""
      })
    }
  }

  exposeInvitableUsers = () => {  
    this.props.gatherAndSetAllUsers()
    this.setState({
      showInvitableUsers: true
    })    
  }

  exposePotentialGiftGetters = () => {  
    this.props.gatherAndSetAllUsers()
    this.setState({
      showPotentialGiftGetters: true
    })    
  }

  addInviteeToEvent = (event) => {  
    event.preventDefault()
    this.props.addInviteeToEvent(this.props.activeEvent.id, this.state.userIDtoAddAsInvitee)
    this.setState({
      userIDtoAddAsInvitee: ""
    })
  }

  addGiftGetterToEvent = (event) => {  
    event.preventDefault()
    this.props.addGiftGetterToEvent(this.props.activeEvent.id, this.state.userIDtoAddAsGiftGetter)
    this.setState({
      userIDtoAddAsGiftGetter: ""
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
    let userFilteredWishList
    let statusFilteredWishList
    if (this.state.userIDofWishListToDisplay !== "" ) {
      userFilteredWishList = this.props.activeEventAllWishListItems.filter( item => item.user_id == this.state.userIDofWishListToDisplay )
      statusFilteredWishList = userFilteredWishList.filter( item => item.status === "added" )
      selectedGetterWishListGrid = <GridBuilder gridType="selectedGetterWishList" gridLinesArray={statusFilteredWishList} history={this.props.history}/>
    } 

    
    // let alreadyInvitedIDArr = this.props.activeEventInvitees.map{ user => user.id }
    // let eventInvitees = this.props.allUserObjs
    let eventInvitees 
    if (this.props.activeEventInvitees.length > 0) {
      eventInvitees = this.props.activeEventInvitees.map( user => <li >{user.first_name + " " + user.last_name}</li>)
    } else {
      eventInvitees = []
    }

    
    let listOfUsersToInvite  
    if ( this.props.allUserObjs.length > 0) {
      let alreadyInvitedIDs = this.props.activeEventInvitees.map( user => user.id )
      let allUsersIDs = this.props.allUserObjs.map( user => user.id )
      let notInvitedIDs = []
      for (let id of allUsersIDs) { if ( !alreadyInvitedIDs.includes(id)) {notInvitedIDs.push(id)}} 
      let notInvitedOBJs = []
      for (let id of notInvitedIDs) { notInvitedOBJs.push(this.props.allUserObjs.find(obj => obj.id == id))}
      if (notInvitedOBJs.length > 0) {
        listOfUsersToInvite = notInvitedOBJs.map( user => <option key={user.id} value={user.id} >{user.first_name + " " + user.last_name}</option>)  
      } else {
        listOfUsersToInvite = []
      }
    }

    let listOfGuestsTheCouldBeAddedToGiftGetterList 
    if ( this.props.allUserObjs.length > 0) {
      let alreadyGettingGiftsIDs = this.props.activeEventGiftGettersArr.map( user => user.id )
      let allUsersIDs = this.props.allUserObjs.map( user => user.id )
      let couldGetGiftsIDs = []
      for (let id of allUsersIDs) { if ( !alreadyGettingGiftsIDs.includes(id)) {couldGetGiftsIDs.push(id)}} 
      let couldGetGiftsOBJs = []
      for (let id of couldGetGiftsIDs) { couldGetGiftsOBJs.push(this.props.allUserObjs.find(obj => obj.id == id))}
      if (couldGetGiftsOBJs.length > 0) {
        listOfGuestsTheCouldBeAddedToGiftGetterList = couldGetGiftsOBJs.map( user => <option key={user.id} value={user.id} >{user.first_name + " " + user.last_name}</option>)  
      } else {
        listOfGuestsTheCouldBeAddedToGiftGetterList = []
      }
    }
      
    return (
      <div id="EventDetails">
        <div className="TopAndCenter">
          <h1>{this.props.activeEvent.event_name}</h1>
        </div>
        <div>
          { this.props.activeEvent.event_managing_user_id === this.props.activeUser.id
            ?
            <div>
              <h3>Since you are managing this Event, you also manage the below list of invitees. </h3>
              {eventInvitees}
              {this.state.showInvitableUsers === true
              ?
                <div>
                  <form onSubmit={(event) => this.addInviteeToEvent(event)} >
                    <select value={this.state.userIDtoAddAsInvitee} name="userIDtoAddAsInvitee" onChange={this.formChangeHandler}>
                      <option value="" >Select One</option>
                      {listOfUsersToInvite}
                    </select>
                    {this.state.userIDtoAddAsInvitee === "" 
                    ?
                      <button type="submit" disabled >Add User to Invited List</button>
                    :
                      <button type="submit" >Add User to Invited List</button>
                    }
                  </form>
                </div>  
              :
                <button name="showInvitableUsers" onClick={this.exposeInvitableUsers} >Invite Other users</button>
            }
            </div>
            :
            null
          }
        </div>

        <br /><br />
        {this.props.activeEventGiftGettersArr.length > 0 
        ?
          <div>
            <h3>Below are the names of people that will recieve gifts at this event.  Clicking on any name will expose the items on their wishlists that have not yet been purchased as gifts by other people.  <br/><b style={{color: "red"}}> Note: you can't see your own wishlist from this view since it would ruin the surprise!</b></h3>
            <ul>
              {eventGiftGetters}
              {this.state.userIDofWishListToDisplay !== "" ? selectedGetterWishListGrid.props.gridLinesArray.length > 0 ? selectedGetterWishListGrid : <h3>This user's wishlist is empty</h3> : null}
            </ul>

            
          </div>
        :
          <div>
            <h1>So far, nobody is registered to recieve gifts at this event.</h1>
          </div>
        }
        { this.props.activeEvent.event_managing_user_id === this.props.activeUser.id
              ?
              <div>
                <h3>Since you are managing this Event, you also manage the list of people that will get gifts. </h3>
                {this.state.showPotentialGiftGetters === true
                ?
                  <div>
                    <form onSubmit={(event) => this.addGiftGetterToEvent(event)} >
                      <select value={this.state.userIDtoAddAsGiftGetter} name="userIDtoAddAsGiftGetter" onChange={this.formChangeHandler}>
                        <option value="" >Select One</option>
                        {listOfGuestsTheCouldBeAddedToGiftGetterList}
                      </select>
                      {this.state.userIDtoAddAsGiftGetter === "" 
                      ?
                        <button type="submit" disabled >Add User to Gift Getter List</button>
                      :
                        <button type="submit" >Add User to Gift Getter List</button>
                      }
                    </form>
                  </div>  
                :
                  <button onClick={this.exposePotentialGiftGetters} >Add Gift Getters</button>
              }
              </div>
              :
              null
            }
      </div>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    addInviteeToEvent: (eventID, userID) => dispatch(addInviteeToEvent(eventID, userID)),
    addGiftGetterToEvent: (eventID, userID) => dispatch(addGiftGetterToEvent(eventID, userID)),
    gatherAndSetAllUsers: () => dispatch(gatherAndSetAllUsers())
  }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    loggedInAcct: state.loggedInAcct,
    activeUser: state.activeUser,
    primaryUser: state.primaryUser,
    allUserObjs: state.allUserObjs,
    activeUserManagedEvents: state.activeUserManagedEvents,
    activeUserGiverEventOBJsArr: state.activeUserGiverEventOBJsArr,
    activeUserGiverEventsGetterOBJsArr: state.activeUserGiverEventsGetterOBJsArr,
    activeEvent: state.activeEvent,
    activeEventGiftGettersArr: state.activeEventGiftGettersArr,
    activeEventAllWishListItems: state.activeEventAllWishListItems,
    activeEventInvitees: state.activeEventInvitees

  } 
}

export default connect(msp, mdp)(EventDetails) 