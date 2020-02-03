import { handleActions } from 'redux-actions'
import initialState from './initialState'

const reducer = handleActions({
  'IMAGES_GET_SUCCESS'(action, state) {
    const { images } = state;
    return {
      ...state,
      images: images
    }
  },
  'IMAGES_GET_FAIL'(action, state) {
    const { error } = state;
    return {
      ...state,
      error: error
    }
  },
}, initialState);

export default reducer
