import './chatpage.scss';
import React from 'react';
import ChatForm from '../chatform/ChatForm';
import ChatBox from '../chatbox/ChatBox';
import axios from 'axios';


let CHAT_API = "http://api.brainshop.ai/get?bid=154486&key=JrmW52i3yHeAZ5Hr&uid=[uid]&msg=";

let YODA_API = "https://api.funtranslations.com/translate/yoda.json?text=";
let YODA_API_KEY = "ErtGYCgcwZgzmDiDWcrHhgeF";


class ChatPage extends React.Component {
    constructor() {
        super();
        this.state = {
            convMessages: []
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
  

    componentDidMount() {
        this.setState({
            convMessages: [],
        })
    }
    componentDidUpdate(prevProps, prevState) {    
    }


    submitHandler(e) {
        e.preventDefault();
        let newMessage = {
            type:"user",
            message: e.target.text.value
        }
        this.setState({
            convMessages: [...this.state.convMessages, newMessage],
        })

        axios.get(CHAT_API + e.target.text.value)
        .then(res => {

            axios
                .get(YODA_API + res.data.cnt, {
                    headers: {
                        "X-FunTranslations-Api-Secret": `${YODA_API_KEY}`
                    }
                })
                .then((yodRes) => {
                    let newMessage = {
                        type: "yoda", 
                        message: yodRes.data.contents.translated
                    }
                    this.setState({
                        convMessages: [...this.state.convMessages, newMessage]
                    })
                })
        })
        let form = document.getElementById('form')
        form.reset();
    }


    render() {
        return (
            <div className="chat-page">
                <ChatBox convMessages={this.state.convMessages}/>
                <ChatForm submitHandler={this.submitHandler}/>
            </div>
        )

    }

}

export default ChatPage
