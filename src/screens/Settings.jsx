import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Clock extends React.Component {
    render(){   
        return (
            <div className="wrapper">
                <Link to="/">Back</Link>
                <p>Hello world from Settings</p>
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
