import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromWishlist } from '../actions'



class WishlistCardBuilder extends React.Component {

  editItemClickHandler = (itemObj) => {
    this.setState({

    })
    
  }



  render(){

    switch (this.props.cardType) {
      case "ActiveUserCards":
        return (
          <div className="WishlistCard" onClick={null}> 
            <h2>{this.props.wishlistObj.gift_name}</h2>
            <img className="WishlistCardImg" alt="Gift" src={this.props.wishlistObj.gift_image}  />
            <p>Status: {this.props.wishlistObj.status}</p>
            <p>Created: {Date(this.props.wishlistObj.created_at)}</p>
            {/* <button onClick={setSelectedCampaignAndContributions("campaigns/" + this.props.campaignObj.id, this.props.campaignObj, this.props.history)} >View Details</button> */}
            {/* <div id="CampaignCardDescription" >
              <h5>
                {this.props.campaignObj.campaign_description}
              </h5>
            </div> */}
            <button className="WishlistItemCardButton" onClick={() => this.editItemClickHandler(this.props.wishlistObj)} >Edit Item</button>
            <button className="WishlistItemCardButton" onClick={() => this.props.removeItemFromWishlist(this.props.wishlistObj.id, this.props.activeUser.id)} >Remove Item</button>
          </div>
          )// ends return

      default:  return "HI"

    } // ends switch/case
  }// ends render
} // ends class

function mdp(dispatch) {
  return { 
    
    removeItemFromWishlist: (ItemID, userID) => dispatch(removeItemFromWishlist(ItemID, userID)),

  }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { 
    loggedInAcct: state.loggedInAcct,
    activeUser: state.activeUser,
    activeUserWishList: state.activeUserWishList
  } 
}

export default connect(msp, mdp)(WishlistCardBuilder) 