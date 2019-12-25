import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'


const stateOptions = [
  <option value='' >Select your state</option>,
  <option value='Alabama' >Alabama</option>,
  <option value='Alaska' >Alaska</option>,
  <option value='Arizona' >Arizona</option>,
  <option value='Arkansas' >Arkansas</option>,
  <option value='California' >California</option>,
  <option value='Colorado' >Colorado</option>,
  <option value='Connecticut' >Connecticut</option>,
  <option value='Delaware' >Delaware</option>,
  <option value='Florida' >Florida</option>,
  <option value='Georgia' >Georgia</option>,
  <option value='Hawaii' >Hawaii</option>,
  <option value='Idaho' >Idaho</option>,
  <option value='Illinois' >Illinois</option>,
  <option value='Indiana' >Indiana</option>,
  <option value='Iowa' >Iowa</option>,
  <option value='Kansas' >Kansas</option>,
  <option value='Kentucky' >Kentucky</option>,
  <option value='Louisiana' >Louisiana</option>,
  <option value='Maine' >Maine</option>,
  <option value='Maryland' >Maryland</option>,
  <option value='Massachusetts' >Massachusetts</option>,
  <option value='Michigan' >Michigan</option>,
  <option value='Minnesota' >Minnesota</option>,
  <option value='Mississippi' >Mississippi</option>,
  <option value='Missouri' >Missouri</option>,
  <option value='Montana' >Montana</option>,
  <option value='Nebraska' >Nebraska</option>,
  <option value='Nevada' >Nevada</option>,
  <option value='New Hampshire' >New Hampshire</option>,
  <option value='New Jersey' >New Jersey</option>,
  <option value='New Mexico' >New Mexico</option>,
  <option value='New York' >New York</option>,
  <option value='North Carolina' >North Carolina</option>,
  <option value='North Dakota' >North Dakota</option>,
  <option value='Ohio' >Ohio</option>,
  <option value='Oklahoma' >Oklahoma</option>,
  <option value='Oregon' >Oregon</option>,
  <option value='Pennsylvania' >Pennsylvania</option>,
  <option value='Rhode Island' >Rhode Island</option>,
  <option value='South Carolina' >South Carolina</option>,
  <option value='South Dakota' >South Dakota</option>,
  <option value='Tennessee' >Tennessee</option>,
  <option value='Texas' >Texas</option>,
  <option value='Utah' >Utah</option>,
  <option value='Vermont' >Vermont</option>,
  <option value='Virginia' >Virginia</option>,
  <option value='Washington' >Washington</option>,
  <option value='West Virginia' >West Virginia</option>,
  <option value='Wisconsin' >Wisconsin</option>,
  <option value='Wyoming' >Wyoming</option>
  ]

class SignUp extends React.Component {

    state = {
        first_name: "",
        last_name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        cell_phone: "",
        email_address: "",
        password: "",
        confirm_password: ""
    }

    componentDidMount(){
      document.title = "WeThePromo - Sign Up Form"
    }

    
    fieldChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        switch (true) {
        case (this.state.password != this.state.confirm_password):
            alert("Your 'password' and 'password confirmation' fields dont match")
            break
        default:
            this.props.signUp(this.state, this.props.history)
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

              <h5>Street: <input type="text" name="street" label='Street'  value={this.state.street} onChange={this.fieldChangeHandler}/></h5>
              <h5>City: <input type="text"   name="city" label='City' /></h5>
              <h5>State: <select  control="select" options={stateOptions} name="state" label='State'  value={this.state.state} onChange={this.fieldChangeHandler} >
                {stateOptions}
              </select></h5>
              <h5>Email Address: <input type="text" required name="email_address" fluid icon='user' iconPosition='left' label='E-mail address' placeholder="this is your login id"  value={this.state.email_address} onChange={this.fieldChangeHandler}/></h5>
              <h5>Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Password' type='password' label='Password' name="password"  value={this.state.password} onChange={this.fieldChangeHandler}  /></h5>
              <h5>Confirm Password: <input required fluid icon='lock' type='password' iconPosition='left' placeholder='Confirm Password' type='password' label='Confirm Password' name="confirm_password" value={this.state.confirm_password} onChange={this.fieldChangeHandler} /></h5>

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
  return { signUp: (stateObj, history) => dispatch(signUp(stateObj, history)) }
}

// this comes from reduct.js - K is local reference, V is foreign state attribute
function msp(state) {
  return { workingCampaignObj: state.workingCampaignObj}
}

export default connect(msp, mdp)(SignUp) 