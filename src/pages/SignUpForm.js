import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import axios from 'axios';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            userName:'',
            password: '',
            passwordConfirmation: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

  

    handleSubmit(e) {
        e.preventDefault();

        let correct =  function() {
          document.querySelector('#error').style.display = "none";
        }

        // Password Validation & Post Request //
       
        if (this.state.passwordConfirmation === this.state.password){
        
        console.log('SignUp Successful', correct());

        axios.post('https://staging-api.recruitd.co.uk/professional_auth/', { 
                
          name: this.state.name,
          email: this.state.email,
          userName: this.state.userName,
          password: this.state.password,
          passwordConfirmation: this.state.passwordConfirmation,
          hasAgreed: this.state.hasAgreed
          
        })
        .then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
        console.log('Error in posting to Api', error);
        });
       }  
        
      else {
          let errorMsg =  function() {
            document.querySelector('#error').style.display = "block";
          }
          console.log('password do not match', errorMsg());
        }
       

    }

  render() {
      return (
 <div className="App__Form">
   <div className="section">


    <form onSubmit={this.handleSubmit} id="formWrapper">

  <p id="signIn">Already have an account <a href="/signin">Sign in here</a></p>

    <div className="field">
        <label className="labelTitle" htmlFor="name">Full Name</label>
        <div className="control">
          <input type="text" id="name"  className="input" placeholder="Full Name" name="name" value={this.state.name}  onChange={this.handleChange} required />
        </div>
    </div>

    <div className="field">
      <label className="labelTitle" htmlFor="email">Email Address</label>
      <div className="control">
        <input className="input" id="email" type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} required />
      </div>
    </div>


    <div className="field">
        <label className="labelTitle" htmlFor="name">Username</label>
        <div className="control">
          <input className="input" type="text" id="userName" placeholder="Username" name="userName"  value={this.state.userName} onChange={this.handleChange} required />
        </div>
    </div>

    

      <div className="field">
          <label className="labelTitle" htmlFor="password">Password</label>
          <p className="control has-icons-left">
                <input  className="input" type="password"  name="password"  placeholder="Password" value={this.state.password || ''}  onChange={this.handleChange} required />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
      </div>

      <div className="field">
          <label className="labelTitle" htmlFor="password">Password Confirmation</label>
          <p className="control has-icons-left">

                <input   className="input" type="password"  id="password" name="passwordConfirmation"  placeholder="Type in your password again" 
                value={this.state.passwordConfirmation || ''}  onChange={this.handleChange}  required />

              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
          </p>
          <p className="help is-danger" id="error">Password does not match</p>
      </div>

    
      <div className="FormField">
        <label className="FormField__CheckboxLabel">
        <input className="FormField__Checkbox"  type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} required />

              Creating an account means you have read and accept our 
              <a href="" className="FormField__TermsLink">Privacy Policy</a> and <a href="" className="FormField__TermsLink">Terms of Use.</a>
        </label>
      </div>

      <div className="FormField">
          <button className="FormField__Button" type="submit">Create Account</button> 
      </div>
    </form>

    </div>
 </div>
     
           
        );
    }
}

export default SignUpForm;
