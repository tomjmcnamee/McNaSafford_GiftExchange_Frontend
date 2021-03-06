import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromWishlist } from '../actions'



class WishlistCardBuilder extends React.Component {




  render(){

    switch (this.props.cardType) {
      case "ActiveUserCards":
        return (
          <div className="WishlistCard" onClick={null}> 
            <h2>{this.props.wishlistObj.gift_name}</h2>
            <img className="WishlistCardImg" alt="Gift" src={this.props.wishlistObj.gift_image}  />
            {/* <p>Status: {this.props.wishlistObj.status}</p> */}
            {/* <p>Added to your wishlist: {Date(this.props.wishlistObj.created_at).slice(4,25)}</p> */}
            {/* <p>Added to your wishlist: {(this.props.wishlistObj.created_at).getTimezoneOffset() * 60000}</p> */}
            <p>Added to your wishlist: {new Date(this.props.wishlistObj.created_at).toString().slice(4, 21)}</p>
            {/* <button onClick={setSelectedCampaignAndContributions("campaigns/" + this.props.campaignObj.id, this.props.campaignObj, this.props.history)} >View Details</button> */}
            {/* <div id="CampaignCardDescription" >
              <h5>
                {this.props.campaignObj.campaign_description}
              </h5>
            </div> */}
            <a href={this.props.wishlistObj.amazon_url} target="_none"><button className="WishlistItemCardButton" >View Item on Amazon</button></a>
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