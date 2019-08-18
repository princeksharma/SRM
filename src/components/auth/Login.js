import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      organisation:'',
      email:'',
      password:'',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/profile');
  }


  render() {
    return(
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8"> 
            <form onSubmit={this.onSubmit}>
              <h1>Log In</h1>
              <div class="form-group">
                <h6>Organisation</h6>
                <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="form-group">
                  <h6>Email</h6>
                  <input 
                    type="email" 
                    name="email"
                    onChange={this.onChange}
                    className="form-control" 
                  />
              </div>
              <div className="form-group">
                  <h6>Password</h6>
                  <input 
                    type="password" 
                    name="password"
                    onChange={this.onChange}
                    className="form-control" 
                  />
              </div>
              <div className="text-center">
                <button style={{ borderRadius: '20px'}}type="submit" className="btn btn-dark ">Log In</button>
                <div className="text-inline">
                DOn't have an account  {' '}<Link to="/register"><strong style={{color: 'black'}}>Sign Up</strong></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;