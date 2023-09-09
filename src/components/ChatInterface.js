// src/components/ChatInterface.js
import React, { useState } from 'react';
import './ChatInterface.css'; // Import the CSS file



function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, user: 'user' }]);
      // Simulate a chatbot response (you can replace this with actual chatbot logic)
      setMessages([...messages, { text: `Chatbot: ${inputMessage}`, user: 'chatbot' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
