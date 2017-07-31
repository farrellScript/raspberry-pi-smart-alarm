import {
  SET_TIME,
  TOGGLE_ALARM
} from './types'

export const setTime = (time) => {
  return {
    payload: time,
    type: SET_TIME
  }

}

export const toggleAlarm = () => {
  return {
    type: TOGGLE_ALARM
  }

}
