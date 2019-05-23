
import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import {SIGN_IN} from '../../../apollo/Mutations'
import { connect } from 'react-redux';
import { getErrors,authenticateUser } from '../../../redux/actions';
import PropTypes from 'prop-types'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const {email, password } = this.state
    return (
        <Mutation mutation={SIGN_IN}>
            {(signIn, {data})=>(
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
              signIn({variables: {email, password}})
              .then(res=>{this.props.authenticateUser(res.data, this.props.history)})
              .catch(err => this.props.getErrors(err.message))
          } }>
             Login 
          </div>

        </div>
      </div>
            )}
        </Mutation>
      
    )
  }

}
Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
  getErrors: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});
export default connect(mapStateToProps, { getErrors, authenticateUser })(Login);