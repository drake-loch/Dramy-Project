import './chatform.scss';
import React from 'react'

export default function ChatForm(props) {
    console.log(props.submitHandler)
    return (
        <div className="chat-form">
            <form id="form"className="chat-form__form" onSubmit={e => props.submitHandler(e)}>
                <textarea id="text" name="text" className="chat-form__form__textarea"></textarea>
                <button className="chat-form__form__button">Send</button>
            </form>
        </div>
    )
}
