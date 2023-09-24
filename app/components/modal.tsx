import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Form } from "@remix-run/react";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}





const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  let [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', isBot: true },
  ]);
  let [inputValue, setInputValue] = useState('I need to find someone ...');

  let handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  let handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    if (inputValue.trim() !== '') {
      inputValue = inputValue.trim() + '\n';
      await setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
    }
    console.log(inputValue);

    let fetchData = await fetch('/api/chat', {
      method: "POST",
      body: inputValue,
      headers: {
        "Content-Type": "text/plain" 
      }
    });

    if (fetchData.ok) {
      let response = await fetchData.text();
      await setMessages([...messages, { text: inputValue, isBot: false }, { text: response, isBot: true }]);
    }
  };
  

  const handleClearHistory = () => {
    setMessages([{ text: 'Hi there! How can I help you today?', isBot: true }]);
  };

  const handleClose = () => {
    setInputValue('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-accent-content bg-opacity-50 flex justify-end items-end ">
      <div className="bg-base-100 p-4 rounded-md max-w-md w-full min-h-[50vh] flex flex-col sm:m-4 md:m-8 lg:m-12 xl:mx-16 z-10">
        <div className="flex justify-between items-center mb-4 flex-none">
          <h2 className="text-lg font-medium">Seek help</h2>
          <button className="p-2" onClick={onClose}>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col space-y-2 flex-grow max-h-[70vh] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${message.isBot ? 'text-accent-content bg-green-500' : 'text-accent-content bg-blue-500 self-end'}
              p-2 rounded-md max-w-xs shadow-inner shadow-neutral-content
              `}
            >
              {message.text}
            </div>
          ))}
        </div>
        <Form replace onSubmit={handleFormSubmit} className="mt-4 flex-none flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md p-2 mr-2 shadow-inner shadow-base-200"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md shadow-inner shadow-neutral-content"
          >
            Send
          </button>
        </Form>
        <button onClick={handleClearHistory} className="mt-4 flex-none">
          Clear History
        </button>
      </div>
    </div>
  );
};

export default Modal;