import {
  TOGGLE_ALARM,
  UPDATE_SETTING,
  TOGGLE_SETTINGS
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

export const toggleSettings = () => {
  return {
    type: TOGGLE_SETTINGS
  }
}
