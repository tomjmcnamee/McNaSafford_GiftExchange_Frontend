import React from 'react'
import { connect } from 'react-redux'
// import { switchActiveUser } from '../actions'
import  ManageOtherUsers  from './ManageOtherUsers'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class MyHomepage extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    dob: "",
    account_id: "",
    managing_account_id: this.props.loggedInAcct.id
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
    let managingUsers
    if (this.props.managingUsers.length > 0) {
      managingUsers = this.props.managingUsers.map(User => <li onClick={() => this.props.switchActiveUser(User)}>{User.first_name + " " + User.last_name}</li>)
    } else {
      managingUsers = []
    }

    return (
      <div id="MyHomepage">
        <ManageOtherUsers />
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
    managingUsers: state.managingUsers
  } 
}

export default connect(msp, mdp)(MyHomepage) 