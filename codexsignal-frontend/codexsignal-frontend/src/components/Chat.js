import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Message Sent:', message);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 w-full mb-2"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 w-full">
        Send Message
      </button>
    </div>
  );
};

export default Chat;