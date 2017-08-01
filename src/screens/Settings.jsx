import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { updateSetting } from '../actions'
import { connect } from 'react-redux'
import {
  Route,
  Link
} from 'react-router-dom'

class Clock extends React.Component {
    constructor(props){
        super(props)
        this._inputChange = this._inputChange.bind(this)
    }

    _inputChange(key,value){
        this.props.dispatch(updateSetting(key,value))
    }
    render(){   
        return (
            <div className="wrapper">
                <ul className="settings-controls">
                    <li>
                        <p><label htmlFor="apikey">Google Maps Key</label></p>
                        <p><input value={this.props.alarm.get('apiKey')} onChange={(e)=>this._inputChange('apiKey',e.target.value)} name="apikey" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="alarmtime">Alarm Time</label></p>
                        <p><input value={this.props.alarm.get('alarmTime')} onChange={(e)=>this._inputChange('alarmTime',e.target.value)} name="alarmtime" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="startlocation">Start Location</label></p>
                        <p><input value={this.props.alarm.get('startLocation')} onChange={(e)=>this._inputChange('startLocation',e.target.value)} name="startlocation" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="endlocation">End Location</label></p>
                        <p><input value={this.props.alarm.get('endLocation')} onChange={(e)=>this._inputChange('endLocation',e.target.value)} name="endlocation" type="text"/></p>
                    </li>
                    <li className="buttons">
                        <p><button className="button"><Link to="/">Back</Link></button></p>
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
