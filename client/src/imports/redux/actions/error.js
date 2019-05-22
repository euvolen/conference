import { GET_ERRORS} from '../types';

// Register User
export const getErrors = (error) => dispatch => {
        dispatch({
          type: GET_ERRORS,
          payload: {error}
        })
  };