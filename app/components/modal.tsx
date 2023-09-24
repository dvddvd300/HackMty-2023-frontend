import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApiResponse {
  response: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      // Add the user's message to the state
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isBot: false },
      ]);
      setInputValue('');

      try {
        const response = await fetch(
          'https://85d4-131-178-102-148.ngrok-free.app/chatbot',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: JSON.stringify({ message: inputValue }),
          }
        );

        if (!response.ok) {
          console.error('Network response not ok. Status:', response.status);
          throw new Error('Network response was not ok');
        }

        // Parse the response as ApiResponse and cast it
        const responseData: ApiResponse = await response.json();

        // Add the bot's response to the state
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: responseData.response, isBot: true },
        ]);
      } catch (error) {
        console.error('API request error:', error);
      }
    }
  };

  const handleClearHistory = () => {
    setMessages([
      { text: 'Hi there! How can I help you today?', isBot: true },
    ]);
  };

  const handleClose = () => {
    setInputValue('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Seek help</h2>
          <button className="p-2" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col space-y-2">
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
        <form onSubmit={handleFormSubmit} className="mt-4 flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2 mr-2"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
        <button onClick={handleClearHistory} className="mt-4">
          Clear History
        </button>
      </div>
    </div>
  );
};

export default Modal;
