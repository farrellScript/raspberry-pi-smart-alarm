import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  Route,
  Link
} from 'react-router-dom'

class Clock extends React.Component {
    render(){   
        return (
            <div className="wrapper">
                <ul className="settings-controls">
                    <li>
                        <p><label htmlFor="apikey">Google Maps Key</label></p>
                        <p><input name="apikey" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="alarmtime">Alarm Time</label></p>
                        <p><input name="alarmtime" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="startlocation">Start Location</label></p>
                        <p><input name="startlocation" type="text"/></p>
                    </li>
                    <li>
                        <p><label htmlFor="endlocation">End Location</label></p>
                        <p><input name="endlocation" type="text"/></p>
                    </li>
                    <li className="buttons">
                        <p><button className="button"><Link to="/">Cancel</Link></button></p>
                    </li>
                    <li className="buttons">
                        <p><button className="button"><a href="#">Save</a></button></p>
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
