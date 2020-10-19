import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, Icon } from '@material-ui/core';
import './App.css';
import './logo.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core';
// https://www.youtube.com/watch?v=KB7JEnfc7Dc  2:29:39

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });

  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter name'))
  }, [])

  const sendMessage = (event) => {
    //logic for message
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App" >
      <h1 className="main">
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>T</span>
        <span className="letter"></span>
        <span>R</span>
      </h1>
      <img src="https://raw.githubusercontent.com/DevLaukey/victor/master/laukey%20.ico" width="200px" alt="Logo" />
      <h1>Hi, There</h1>
      <h2>Welcome {username} !</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder='Enter a message ...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="secondary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>


      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;

// use state is a variable in React
// use effect is executed when a condition is met