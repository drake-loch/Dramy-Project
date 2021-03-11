import './chatbox.scss';
import React, { Component } from 'react';
import ChatBubble from '../chatbubble/ChatBubble'
import YodaBubble from '../yodabubble/YodaBubble'
import {v4 as uuid} from 'uuid';

export function ChatBox(props) {
        return (
            <div className="chat-box">
                {props.convMessages.map(mes => {
                    if (mes.type == 'user') {
                        return <ChatBubble key={uuid()}  message={mes.message}/>
                    } else if (mes.type =='yoda') {
                        return <YodaBubble key={uuid()} message={mes.message}/>
                    }
                })}
                
            </div>
        )
}

export default ChatBox

