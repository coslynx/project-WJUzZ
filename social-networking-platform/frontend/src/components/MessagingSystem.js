import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessagingSystem = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages: ', error);
    }
  };

  const sendMessage = async () => {
    try {
      await axios.post('api/messages', { message: newMessage });
      setNewMessage('');
      fetchMessages();
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  return (
    <div>
      <h2>Messaging System</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessagingSystem;