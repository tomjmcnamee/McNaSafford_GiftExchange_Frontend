import React from 'react'
import { connect } from 'react-redux'
import { switchActiveUser } from '../actions'
// import TopIcon from '../Images/WeThePromo-transparentBackgroundIcon.png'

class ManageOtherUsers extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    dob: "",
    account_id: "",
    managing_account_id: this.props.loggedInAcct.id
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
      <div id="ManageOtherUsers">
        {this.props.activeUser.id === this.props.primaryUser.id 
        ?
          <div>
            <h2>User's under your management</h2>
            <p>This feature is for parents of children that are too young to have their own email address or be responsible for creating wishlists without parental supervision.</p>
            <form onSubmit={this.formSubmitHandler}>
              <h2>Create a new user to manage:</h2>
              <h3>First Name: <input required name="first_name" type="text" value={this.state.first_name} onChange={this.formChangeHandler}/></h3>
              <h3>Last Name: <input required name="last_name" type="text" value={this.state.last_name} onChange={this.formChangeHandler}/></h3>
              <h3>Date Of Birth: <input required name="dob" type="date" value={this.state.dob} onChange={this.formChangeHandler}/></h3>
              <button type="submit">Submit</button>
            </form>

            <div id="managingUsers">
              <ul>
                {managingUsers}
              </ul>
            </div>
          </div>
        :
          null
        }
      </div>
  )} // ends Return and Render
} // ends class

function mdp(dispatch) {
  return { 
    switchActiveUser: (UserObj) => dispatch(switchActiveUser(UserObj)),
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

export default connect(msp, mdp)(ManageOtherUsers) 