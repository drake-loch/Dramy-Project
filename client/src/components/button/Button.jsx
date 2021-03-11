import React, { Component } from 'react'
import './button.scss'
import {Link} from 'react-router-dom';

export class Button extends Component {
    render() {
        return (
            <Link to="/chat">
                <div className="bttnHolder">
                    <button className="beginBttn">Begin here, you will!</button>
                </div>
            </Link>
        )
    }
}

export default Button
