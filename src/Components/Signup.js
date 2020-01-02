import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'


class SignUp extends React.Component {

    state = {
      first_name: "",
      last_name: "",
      dob: "",
      email_address: "",
      password: "",
      password_confirmation: ""
    }

    componentDidMount(){
      document.title = "McNaSafford - Sign Up Form"
    }

    
    fieldChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        switch (true) {
        case (this.state.password != this.state.password_confirmation):
            alert("Your 'password' and 'password confirmation' fields dont match")
            break
        default:
          let user = {first_name: this.state.first_name, last_name: this.state.last_name, dob: this.state.dob}
          let account = {email_address: this.state.email_address.toLowerCase(), password: this.state.password}
            this.props.signUp(user, account, this.props.history)
        }
        // if (this.state.password === this.state.confirm_password) {
        //     // --------------this.props.logUserIn("login", this.state, this.props.history)
        // } else {
        //     alert('Your entries in the "Password" and "Confirm Password" fields are different, please try again')
        //     this.setState({
        //         password: "",
        //         confirm_password: ""
        //     })
        // }
    }

    render () {

        return(

          <div name="PAGE DIV" id="SignUpPrimaryDiv" className="ui grid">
            <div className="five wide column"  >
            </div>
            <div className="six wide column"  id="SignUpCenterDiv" >
          
            <form id="signupForm" onSubmit={(event) => this.formSubmitHandler(event)}>
              <h2>Sign Up For Your Account</h2>
              <h5>First Name: <input required type="text" name="first_name" label='First Name' value={this.state.first_name} onChange={this.fieldChangeHandler} /></h5>
              <h5>Last Name: <input  type="text" name="last_name" label='Last Name'  value={this.state.last_name} onChange={this.fieldChangeHandler}/></h5>
              <h5>Date Of Birth: <input  type="date" name="dob" label='Last Name'  value={this.state.dob} onChange={this.fieldChangeHandler}/></h5>
              <h5>Email Address: <input type="text" required name="email_address" fluid icon='user' iconPosition='left' label='E-mail address' placeholder="this is your login id"  value={this.state.email_address} onChange={this.fieldChangeHandler}/></h5>
              <h5>Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Password' type='password' label='Password' name="password"  value={this.state.password} onChange={this.fieldChangeHandler}  /></h5>
              <h5>Confirm Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Confirm Password' type='password' label='Confirm Password' name="password_confirmation" value={this.state.password_confirmation} onChange={this.fieldChangeHandler} /></h5>

              <button color='teal' fluid size='large' type="submit" >Sign Up!</button>
              <h3>
                Already have an account? <a href="/LogIn">Log In</a>
              </h3>

            </form>
            </div>
           <div className="five wide column"  >
          </div>
        </div>

    )
    }
}

function mdp(dispatch) {
  return { signUp: (user, account, history) => dispatch(signUp(user, account, history)) }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  // return { workingCampaignObj: state.workingCampaignObj}
}

export default connect(msp, mdp)(SignUp) 