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
        
      </div>
    ) // Ends Return
  } // Ends Render
} // ends Class

function mdp(dispatch) { 
  return { 
  }
}

function msp(state) { return { 
  
  }
}

export default connect(msp, mdp)(HomePage)