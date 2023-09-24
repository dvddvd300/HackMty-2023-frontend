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

    // Call your chatbot API here and handle the response
    fetch("https://85d4-131-178-102-148.ngrok-free.app/chatbot", {
      method: "POST",
      body: userInput,
      headers: {
        "Content-Type": "text/plain",
      },
      mode: 'no-cors'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        const botMessage: Message = { text: data, sender: "Bot" };
        setChatLog([...chatLog, botMessage]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

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
