import {
  SET_TIME
} from './types'

export const setTime = (time) => {
  return {
    payload: time,
    type: SET_TIME
  }

}
