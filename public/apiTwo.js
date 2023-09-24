import { useState } from 'react';

function sendMessage(inputValue, setMessages) {
  let textData = inputValue; 

  let fetchData = {
    method: "POST",
    body: textData,
    headers: {
      "Content-Type": "text/plain" 
    }
  };

  fetch("https://85d4-131-178-102-148.ngrok-free.app/chatbot", fetchData)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); 
    })
    .then((data) => {
      setMessages((messages) => [...messages, { text: data, isBot: true }]);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      sendMessage(inputValue, setMessages);
      setInputValue('');
    }
  };

  const handleClearHistory = () => {
    setMessages([{ text: 'Hi there! How can I help you today?', isBot: true }]);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isBot ? 'text-gray-700' : 'text-white bg-blue-500 self-end'
            } p-2 rounded-md max-w-xs`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Type your message here..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      <button onClick={handleClearHistory} className="clear-button">
        Clear History
      </button>
    </div>
  );
}