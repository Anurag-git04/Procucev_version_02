import React, { useState } from 'react';
import { X, Send, Sparkles, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function QuaAiWidget({ onOpenDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'qua',
      text: 'Hello! I am QUA AI, Procucev\'s autonomous procurement assistant. How can I help you automate your RFQs or reduce procurement spend today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    "How does PR to Quotation comparison work?",
    "What is the average savings ROI?",
    "Book a platform demo"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let botResponse = "QUA AI automates your procurement from PR to vendor quotation comparison with zero human intervention. Would you like to schedule a 15-minute live platform demonstration?";
      if (query.toLowerCase().includes('demo') || query.toLowerCase().includes('book')) {
        botResponse = "I'd be happy to set up a live demo for your team! Click the button below or submit your email here.";
        onOpenDemo();
      } else if (query.toLowerCase().includes('savings') || query.toLowerCase().includes('roi')) {
        botResponse = "Our clients in Retail, E-Commerce, and Consumer Brands consistently achieve 8% to 18% direct procurement savings within 60 days of deployment.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'qua',
          text: botResponse,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  return (
    <div className="v2-qua-widget-container">
      
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="v2-chat-popup">
          
          {/* Header */}
          <div className="v2-popup-header">
            <div className="v2-header-user">
              <div className="v2-avatar-box">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="v2-assistant-title">
                  QUA AI Assistant <span className="v2-version-tag">v2.4</span>
                </h4>
                <p className="v2-assistant-sub">Autonomous Procurement Intelligence</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="v2-close-btn"
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Info Badge */}
          <div className="v2-chat-strip">
            <span className="v2-status-flex">
              <CheckCircle2 size={13} className="text-cyan" /> Zero Human Intervention
            </span>
            <span className="v2-coverage-text">Retail & E-Commerce Ready</span>
          </div>

          {/* Message List */}
          <div className="v2-messages-area">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`v2-msg-row ${msg.sender === 'user' ? 'msg-user' : 'msg-qua'}`}
              >
                <div className="v2-msg-bubble">
                  <p>{msg.text}</p>
                  <span className="v2-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="v2-prompts-wrap">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="v2-prompt-btn"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="v2-chat-input-bar">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask QUA AI anything..."
              className="v2-text-input"
            />
            <button
              onClick={() => handleSend()}
              className="v2-send-btn"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>

        </div>
      )}

      {/* Floating Launcher Bubble */}
      <div className="v2-launcher-row">
        {!isOpen && (
          <div className="v2-speech-bubble">
            <span>Have any questions? <strong>QUA AI is happy to help.</strong></span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="v2-trigger-btn"
          aria-label="Toggle QUA AI Assistant"
        >
          {isOpen ? (
            <ChevronUp size={22} />
          ) : (
            <Sparkles size={22} />
          )}
        </button>
      </div>

      <style>{`
        .v2-qua-widget-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          pointer-events: none;
        }

        .v2-chat-popup {
          pointer-events: auto;
          background: #ffffff;
          color: #334155;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 24px 60px rgba(12, 74, 110, 0.20);
          width: 360px;
          overflow: hidden;
          margin-bottom: 12px;
          animation: slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .v2-popup-header {
          padding: 14px 16px;
          background: linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 100%);
          border-bottom: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .v2-header-user {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .v2-avatar-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.20);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .v2-assistant-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .v2-version-tag {
          font-size: 0.68rem;
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
          padding: 1px 6px;
          border-radius: 4px;
          font-family: monospace;
        }
        .v2-assistant-sub {
          font-size: 0.72rem;
          color: #cbd5e1;
        }

        .v2-close-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.70);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .v2-close-btn:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.15);
        }

        .v2-chat-strip {
          background: #F1F5F9;
          padding: 8px 16px;
          font-size: 0.72rem;
          color: #64748B;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .v2-status-flex {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #334155;
        }
        .text-cyan { color: #0EA5E9; }
        .v2-coverage-text { color: #94A3B8; }

        .v2-messages-area {
          padding: 16px;
          height: 260px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #F8FAFC;
        }

        .v2-msg-row {
          display: flex;
        }
        .v2-msg-row.msg-user { justify-content: flex-end; }
        .v2-msg-row.msg-qua { justify-content: flex-start; }

        .v2-msg-bubble {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .msg-user .v2-msg-bubble {
          background: #0EA5E9;
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }
        .msg-qua .v2-msg-bubble {
          background: #ffffff;
          color: #334155;
          border: 1px solid #E2E8F0;
          border-bottom-left-radius: 2px;
        }
        .v2-msg-time {
          display: block;
          font-size: 0.65rem;
          opacity: 0.7;
          text-align: right;
          margin-top: 4px;
        }

        .v2-prompts-wrap {
          padding: 10px;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .v2-prompt-btn {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          color: #334155;
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Poppins', sans-serif;
        }
        .v2-prompt-btn:hover {
          background: rgba(14,165,233,0.10);
          border-color: #0EA5E9;
          color: #0284C7;
        }

        .v2-chat-input-bar {
          padding: 10px 12px;
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .v2-text-input {
          flex: 1;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #334155;
          font-size: 0.8rem;
          padding: 8px 12px;
          border-radius: 10px;
          outline: none;
          font-family: 'Poppins', sans-serif;
        }
        .v2-text-input:focus {
          border-color: #0EA5E9;
        }
        .v2-send-btn {
          background: #F97316;
          border: none;
          color: #ffffff;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .v2-send-btn:hover {
          background: #EA6C00;
        }

        /* Fixed Floating Launcher Button */
        .v2-launcher-row {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .v2-speech-bubble {
          background: #ffffff;
          color: #334155;
          border: 1px solid #E2E8F0;
          box-shadow: 0 8px 24px rgba(12,74,110,0.15);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          white-space: nowrap;
        }
        .v2-speech-bubble strong {
          color: #0EA5E9;
        }

        .v2-trigger-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0C4A6E 0%, #0EA5E9 100%);
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.25);
          box-shadow: 0 10px 25px rgba(12, 74, 110, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .v2-trigger-btn:hover {
          transform: scale(1.08);
        }

        @media (max-width: 640px) {
          .v2-speech-bubble { display: none; }
          .v2-chat-popup { width: 310px; }
        }
      `}</style>
    </div>
  );
}
