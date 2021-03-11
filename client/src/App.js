import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import ChatPage from './components/chatpage/ChatPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/chat" component={ChatPage}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
