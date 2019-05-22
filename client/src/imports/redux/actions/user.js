import { SET_CURRENT_USER, CLEAR_ERRORS } from '../types';

// Authentication
export const authenticateUser = (signIn, history) => dispatch => {
    dispatch({type:CLEAR_ERRORS})
    const {id} = signIn
    const user ={
      id
    }

    history.push(`/account/${id}`)
    dispatch({type: SET_CURRENT_USER,payload:user})
  };
  
// Removing user from the store
export const logoutUser = () => dispatch => {
    dispatch({type:CLEAR_ERRORS})
    dispatch({type: SET_CURRENT_USER,payload:{}})
  };