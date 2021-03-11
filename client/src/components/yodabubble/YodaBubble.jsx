import React from 'react'
import './yodabubble.scss';
import yodaPFP from '../../assets/images/yoda.png'

function YodaBubble(props) {
    return (
        <div className="bubble-left">
            <div className="pfp pfp-left"></div>
            <div className="yoda-bubble">
                <p className="yoda-bubble__text">{props.message}</p>
            </div>
        </div>
    )
}

export default YodaBubble
