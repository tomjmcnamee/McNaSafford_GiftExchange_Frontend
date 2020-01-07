import React from 'react'
import { setActiveEvent } from '../actions'
import { connect } from 'react-redux'




class GridLinesBuilder extends React.Component {

	
	
	// totalContributionsForThisCampaign = (campaigns) => {  return campaigns.reduce( (sum, contrib) => {return sum + contrib.contribution_amount }, 0) }
  render() {


      switch(this.props.gridType) {
        case "EventsGrid":
            return(
            <tr className="left aligned changePoiterToFinger" onClick={() => this.props.setActiveEvent(this.props.gridLineObj,this.props.history)}>
            {/* <tr className="left aligned changePoiterToFinger" onClick={() => this.props.history.push("/EventDetails")}> */}
              {/* <td data-label="EventCreateDate" >{Date(this.props.gridLineObj.created_at)}</td> */}
              <td data-label="EventCreateDate" >{Date(this.props.gridLineObj.created_at).slice(4,25)}</td>
              <td  data-label="EventName"  >{this.props.gridLineObj.event_name}</td>
              <td data-label="EventDate"  >{this.props.gridLineObj.event_date}</td>
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
              <td data-label="Purchased"  ><button onClick={() => console.log("You purchased this one")}>Mark as purchased!</button></td>
            </tr>
            )  // ends "Campaigns You've Supported" RETURN
          break 
        default:
      } // ends switch


   } // ends Render
}  // ends GridBuilder class

function mdp(dispatch) {
  return { 
    setActiveEvent: ( eventObj, history ) => dispatch(setActiveEvent( eventObj, history))
  }
}


// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    // workingEntityObj: state.workingEntityObj
  }
}

export default connect(msp, mdp)(GridLinesBuilder)

