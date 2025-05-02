import ReactMarkdown from 'react-markdown';
import { forwardRef } from 'react';

const MessageDisplay = forwardRef(({ messages }, ref) => (
  <div className="message-display" ref={ref}>
    {messages.map((msg, idx) => (
      <div key={idx} className={`message ${msg.sender.toLowerCase()}`}>
        <strong>{msg.sender}:</strong>
        <ReactMarkdown>{msg.text}</ReactMarkdown>
      </div>
    ))}
  </div>
));

export default MessageDisplay;
