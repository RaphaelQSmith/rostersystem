import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      position: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('/posts', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        position: this.state.position
      })
      .then(res => {
        console.log(res);
        this.setState({
          name: '',
          email: '',
          password: '',
          position: ''
        });
      })
  }
  render() {
    return (
      <div className="container row">

        <form onSubmit={this.handleSubmit} className="input-field">
          <div className='col s6'>
            <div>
              <label className="active">
                Name:
                      <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label className="active">
                Password:
                      <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
              </label>
            </div>

          </div>
          <div className='col s6'>
            <div>
              <label className="active">
                Email:
                      <input type="email" name='email' value={this.state.email} onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label className="active">
                Position:
                      <input type="text" name='position' value={this.state.position} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" className="btn waves-effect right #00796b teal darken-2" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
