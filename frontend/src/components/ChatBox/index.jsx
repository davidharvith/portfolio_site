import { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageDisplay from './MessageDisplay';
import ChatInput from './ChatInput';
import './styles.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  // Scroll handling
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  // API call handler
  const handleSend = async (input) => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, 
      { sender: 'user', text: input },
      { sender: 'David', text: 'Thinking...' }
    ]);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });
      const data = await res.json();
      
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'David', text: data.answer }
      ]);
    } catch {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { sender: 'David', text: "Sorry, I couldn't get an answer." }
      ]);
    }
  };

  return (
    <div id="chatbox" className="chat-container">
      <ChatHeader />
      <MessageDisplay messages={messages} ref={chatBoxRef} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatBox;
