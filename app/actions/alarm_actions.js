import {
  TOGGLE_ALARM,
  UPDATE_SETTING,
  TOGGLE_SETTINGS,
  DISABLE_ALARM
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

export const disableAlarm = () => {
  return {
    type: DISABLE_ALARM
  }
}
