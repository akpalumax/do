import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">created by KingMax Services</h5>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        )
    }
}
