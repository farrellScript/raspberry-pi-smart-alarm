import {
  TOGGLE_ALARM,
  UPDATE_SETTING
} from './types'

export const toggleAlarm = () => {
  return {
    type: TOGGLE_ALARM
  }
}

export const updateSetting = (key,value) => {
  return {
    type: UPDATE_SETTING,
    payload: { key,value }
  }
}
