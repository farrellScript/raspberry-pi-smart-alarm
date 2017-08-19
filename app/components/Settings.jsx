import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { updateSetting,toggleSettings } from '../actions'
import { connect } from 'react-redux'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this._inputChange = this._inputChange.bind(this)
        this._toggleSettings = this._toggleSettings.bind(this)

    }

    _inputChange(key,value){
        this.props.dispatch(updateSetting(key,value))
    }

    _toggleSettings(e){
        e.preventDefault()
        this.props.dispatch(toggleSettings())
    }

    render(){   
        return (
            <div className={"wrapper settings-wrapper "+(this.props.alarm.showSettings === true ? 'active':'')}>
                <ul className="settings-controls">
                    <li>
                        <p><label htmlFor="apikey">Google Maps Key</label></p>
                        <p><textarea value={this.props.alarm.apiKey} onChange={(e)=>this._inputChange('apiKey',e.target.value)} name="apikey" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="apikey">Current Time</label></p>
                        <p><input value={this.props.alarm.currentTime} onChange={(e)=>this._inputChange('currentTime',e.target.value)} name="currentTime" type="time"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="alarmtime">Alarm Time</label></p>
                        <p><input value={this.props.alarm.alarmTime} onChange={(e)=>this._inputChange('alarmTime',e.target.value)} name="alarmtime" type="time"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="alarmtime">Check Traffic Time</label></p>
                        <p><input value={this.props.alarm.startTime} onChange={(e)=>this._inputChange('startTime',e.target.value)} name="startTime" type="time"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="startlocation">Start Location</label></p>
                        <p><textarea value={this.props.alarm.startLocation} onChange={(e)=>this._inputChange('startLocation',e.target.value)} name="startlocation" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="endlocation">End Location</label></p>
                        <p><textarea value={this.props.alarm.endLocation} onChange={(e)=>this._inputChange('endLocation',e.target.value)} name="endlocation" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="normalTrafficTime">Normal Commute Time</label></p>
                        <p><input value={this.props.alarm.normalTrafficTime} onChange={(e)=>this._inputChange('normalTrafficTime',e.target.value)} name="normalTrafficTime" type="number"/></p>
                    </li>
                    <li className="buttons">
                        <p><button className="button" onClick={this._toggleSettings}>Back</button></p>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    alarm: state.alarm
  }
}

export default connect(mapStateToProps)(Clock)
