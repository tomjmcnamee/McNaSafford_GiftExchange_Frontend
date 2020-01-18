import React from 'react'
import { setActiveEvent, markWishlistItemAsPurchased, cancelCommitmentToPurchase } from '../actions'
import { connect } from 'react-redux'
import { reformatDateToMMDDYYYY } from '../SupportingFunctions'





class GridLinesBuilder extends React.Component {

  markWishlistItemAsPurchased = ( event) => {
    event.preventDefault()
    this.props.markWishlistItemAsPurchased( event.target.id, this.props.activeUser.id, this.props.activeEvent.id)
  }

  cancelCommitmentToPurchase = ( event) => {
    event.preventDefault()
    this.props.cancelCommitmentToPurchase( event.target.id,  this.props.activeEvent.id)
  }

  selectedGetterWishlistRowButton = (gridLineObj) => {
    let outputLine
    switch (true) {
      case (gridLineObj.status === "added"):
        outputLine = <td ><button id={this.props.gridLineObj.id} onClick={this.markWishlistItemAsPurchased}>Mark as purchased!</button></td>
        break
      case (gridLineObj.status === "marked as purchased" && gridLineObj.giving_user_id === this.props.activeUser.id):
    outputLine = <td ><p>You've registered to purchase this wishlist item for {this.props.selectedGetterOBJ.first_name}</p><button id={this.props.gridLineObj.id} onClick={this.cancelCommitmentToPurchase}>Cancel Commitment to Purchase</button></td>
        break
      default:
        console.log("This event should be happening")
    }
    return outputLine
  }

	
	
	// totalContributionsForThisCampaign = (campaigns) => {  return campaigns.reduce( (sum, contrib) => {return sum + contrib.contribution_amount }, 0) }
  render() {


      switch(this.props.gridType) {
        case "EventsIveCreated":
            return(
            <tr className="left aligned changePoiterToFinger" onClick={() => this.props.setActiveEvent(this.props.gridLineObj,this.props.history)}>
            {/* <tr className="left aligned changePoiterToFinger" onClick={() => this.props.history.push("/EventDetails")}> */}
              <td data-label="EventCreateDate" >{reformatDateToMMDDYYYY(new Date(this.props.gridLineObj.created_at).toString().slice(4, 21))}</td>
              <td  data-label="EventName"  >{this.props.gridLineObj.event_name}</td>
              <td data-label="EventDate"  >{reformatDateToMMDDYYYY(this.props.gridLineObj.event_date)}</td>
            </tr>
            )  // ends "Campaigns You've Supported" RETURN
          break 
        case "EventsImAttending":
            return(
            <tr className="left aligned changePoiterToFinger" onClick={() => this.props.setActiveEvent(this.props.gridLineObj,this.props.history)}>
            {/* <tr className="left aligned changePoiterToFinger" onClick={() => this.props.history.push("/EventDetails")}> */}
              {/* <td data-label="EventCreateDate" >{Date(this.props.gridLineObj.created_at)}</td> */}
              <td  data-label="EventName"  >{this.props.gridLineObj.event_name}</td>
              <td data-label="EventDate"  >{reformatDateToMMDDYYYY(this.props.gridLineObj.event_date)}</td>
            </tr>
            )  // ends "Campaigns You've Supported" RETURN
          break 
        case "selectedGetterWishList":
            return(
            <tr className="left aligned " >
            {/* <tr className="left aligned changePoiterToFinger" onClick={() => this.props.history.push("/EventDetails")}> */}
              <td data-label="ItemImage" ><img className="WishlistCardImgINGRID" alt="Gift" src={this.props.gridLineObj.gift_image}  /></td>
              <td  data-label="ItemName"  >{this.props.gridLineObj.gift_name}</td>
              <td data-label="LinkButton"  ><a target="_blank" href={this.props.gridLineObj.amazon_url}>see this item on Amazon</a></td>
              {this.selectedGetterWishlistRowButton(this.props.gridLineObj)}            </tr>
            )  // ends "Campaigns You've Supported" RETURN
          break 
        default:
      } // ends switch


   } // ends Render
}  // ends GridBuilder class

function mdp(dispatch) {
  return { 
    setActiveEvent: ( eventObj, history ) => dispatch(setActiveEvent( eventObj, history)),
    markWishlistItemAsPurchased: ( wishlistItemID, UserID, ActiveEventId ) => dispatch(markWishlistItemAsPurchased( wishlistItemID, UserID, ActiveEventId)),
    cancelCommitmentToPurchase: ( wishlistItemID, ActiveEventId ) => dispatch(cancelCommitmentToPurchase( wishlistItemID, ActiveEventId))
  }
}


// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    activeUser: state.activeUser,
    activeEvent: state.activeEvent
  }
}

export default connect(msp, mdp)(GridLinesBuilder)

