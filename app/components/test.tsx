import React, { useState } from "react";

interface Message {
  text: string;
  sender: string;
}

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState<Message[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage: Message = { text: userInput, sender: "User" };
    setChatLog([...chatLog, newMessage]);
    setUserInput("");
  return (
    <div className="chatbot">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <div key={index} className={message.sender.toLowerCase()}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={userInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
