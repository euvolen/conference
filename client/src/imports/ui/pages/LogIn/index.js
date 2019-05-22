
import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag';

const SIGN_IN = gql`
mutation SignInMutation($email:String!,$password:String! ){
  signIn(email:$email, password:$password){
        id
    }
}
`


class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password } = this.state
    return (
        <Mutation mutation={SIGN_IN}>
            {(signin, {data})=>(
                <div>
     
        <div className="flex flex-column">
     
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              placeholder="your email"
            />
     
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />

        </div>
        <div className="flex mt3">
          <div className="btn btn-primary" onClick={(e) =>{
              e.preventDefault()
              signin({variables: {email, password}})
              console.log(data)
              this.setState({email:'', password:''})
          } }>
            {login ? 'login' : 'create account'}
          </div>
          <div
            className="btn btn-secondary"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
            )}
        </Mutation>
      
    )
  }

}

export default Login