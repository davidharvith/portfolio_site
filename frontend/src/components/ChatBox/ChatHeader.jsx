export default function ChatHeader() {
    return (
    <div className="chatbot-header">
      <span className="chatbot-header-title">👋 Ask me about David Harvith!</span>
      <div className="tooltip-question" tabIndex={0} aria-label="ChatBot info">
        <span className="question-icon">?</span>
        <span className="tooltip-text">
          This chat bot is powered by Grok AI and will answer any questions you have about David Harvit.
        </span>
      </div>
    </div>

    
    );
  }
  