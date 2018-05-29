import React, { Component } from 'react';

import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

class App extends Component {
  render() {
    console.log(chatMessages);
    const firstUser = chatMessages[0].sender
    const secondUser = chatMessages[1].sender
    const messageData = chatMessages

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat between {firstUser} and {secondUser}</h1>
        </header>
        <main className="App-main">
          <ChatLog chatLog={messageData} localCheck={firstUser}/>
        </main>
      </div>
    );
  }
}

export default App;
