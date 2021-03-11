import './chatbubble.scss';

import React from 'react'

function ChatBubble(props) {
    return (
        <div className="bubble-right">
            <div className="chat-bubble">
                <p className="chat-bubble__text">{props.message}</p>
            </div>
            <div className="pfp pfp-right"></div>
        </div>
    )
}

export default ChatBubble
