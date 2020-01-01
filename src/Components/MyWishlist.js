import React from 'react'
import { connect } from 'react-redux'
import { addWishlistItem } from '../actions'
import WishlistCardBuilder from './WishlistCardBuilder'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class MyWishlist extends React.Component {

  state = {
    gift_name: "",
    amazon_url: "",
    gift_image: "",
    status: "added"
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
      gift_name: "",
      amazon_url: "",
      gift_image: ""
      
    })
  }

  render() {
    let wishlistCards
    if (this.props.activeUserWishList.length > 0) {
      wishlistCards = this.props.activeUserWishList.map(wishlist => <WishlistCardBuilder key={wishlist.id} wishlistObj={wishlist} history={this.props.history} cardType="ActiveUserCards" />)
    } else {
      wishlistCards = []
    }

    return (
      <div id="MyWishlist">
        <form onSubmit={this.formSubmitHandler}>
          <h3>Gift Name: <input required name="gift_name" type="text" value={this.state.gift_name} onChange={this.formChangeHandler}/></h3>
          <h3>Gift Image: <input required name="gift_image" type="text" value={this.state.gift_image} onChange={this.formChangeHandler}/></h3>
          <h3>Amazon URL: <input required name="amazon_url" type="text" value={this.state.amazon_url} onChange={this.formChangeHandler}/></h3>
          <button type="submit">Submit</button>
        </form>

        <div id="WishListCards">
          {wishlistCards}
        </div>
      </div>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    addWishlistItem: (userID, itemDetails, history) => dispatch(addWishlistItem(userID, itemDetails, history)),
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

export default connect(msp, mdp)(MyWishlist) 