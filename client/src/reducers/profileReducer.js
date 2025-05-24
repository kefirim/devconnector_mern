

import {
 GET_PROFILE,
 PROFILE_ERROR,
 CLEAR_PROFILE,
 UPDATE_PROFILE,
} from '../types/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:  
      return {
        ...state,
        profile: payload,
        loading: false
      };
     case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: []
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    default:
      return state;
  }
}

export default profileReducer;