import { SET_CURRENT_USER, CLEAR_ERRORS } from '../types';

// Authentication
export const authenticateUser = (current) => dispatch => {
    dispatch({type:CLEAR_ERRORS})
    dispatch({type: SET_CURRENT_USER,payload:current})
  };
  
// Removing user from the store
export const logoutUser = () => dispatch => {
    dispatch({type:CLEAR_ERRORS})
    dispatch({type: SET_CURRENT_USER,payload:{}})
  };