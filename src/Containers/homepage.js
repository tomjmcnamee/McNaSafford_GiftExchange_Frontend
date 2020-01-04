import React from 'react'
import { connect } from 'react-redux'

class HomePage extends React.Component {
  componentDidMount(){
    document.title = "McNaSafford Gift Exchange - Home Page"
  }


  render() {
   // Builds each campaign Card with fetched Campaign data

   return (
      <div id="homepage">
        <h1>Welcome to the McNaSafford Gift Exchange!</h1>
        {this.props.loggedInAcct.id 
        ?
          <h2>Use the side menu options to create a wishlist, create events, and invite registered users to your events!</h2>
        :
          <div>
            <h2>Log In or Create an Account to get started!</h2>
            <a href="/LogIn" > <button>Log In or Sign Up</button> </a>
          </div>
        }
      </div>
    ) // Ends Return
  } // Ends Render
} // ends Class

function mdp(dispatch) { 
  return { 
  }
}

function msp(state) { return { 
  loggedInAcct: state.loggedInAcct,
  }
}

export default connect(msp, mdp)(HomePage)