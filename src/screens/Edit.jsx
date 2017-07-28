import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Edit extends React.Component {
    render(){
        return (
            <div>
                <Link to="/">Back</Link>
                <p>Hello World from Edit</p>
            </div>
        )
    }
}


export default Edit
