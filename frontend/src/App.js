import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://deploytest-backend.azurewebsites.net/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <h1>{ message }</h1>
  );
}

export default App;
