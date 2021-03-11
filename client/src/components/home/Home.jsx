import './home.scss';
import yodaLogo from '../../assets/images/yoda.png';
import React, { Component } from 'react'
import Button from '../button/Button'


export class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1 className="home__title">welcome to Yoda chat</h1>
                <img src={yodaLogo} alt="yoda" className="home__yoda"/>
                <Button />
            </div>
        )
    }
}

export default Home
