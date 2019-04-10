// import http from 'utils/fetch'

import {
  GET_HINTTOP,
  SET_HIDDENBOOL,
  SET_DISLIKE
} from './actionTypes'

export const getHintTopSync = hintTop => ({
  type: GET_HINTTOP,
  hintTop
})

export const setHiddenBoolSync = hidden => ({
  type: SET_HIDDENBOOL,
  hidden
})

export const setDisLikeSync = disLike => ({
  type: SET_DISLIKE,
  disLike
})

// export const getListAsync = () => {
//   return async dispatch => {
//     let result = await http.get('/api/list')
//     dispatch(getListSync(result.data.slice(0, 3)))
//     dispatch(setIsLoaded(true))
//   }
// }
