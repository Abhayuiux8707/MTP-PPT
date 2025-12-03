
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Save } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatPanel: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm the Sanjeevani Design Assistant. Add your jury notes here or ask me to export a slide.", sender: 'bot', timestamp: 'Now' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = {
        id: Date.now(),
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Intelligent Bot Logic
    setTimeout(() => {
        let reply = "Noted. Saved to session logs.";
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('convert') && lowerInput.includes('slide')) {
             const slideContent = input.replace(/convert.*slide.*text/i, '').trim();
             reply = `Here is a slide-ready format based on your input:\n\n**Slide Title:** Strategic Design Insight\n**Key Points:**\n• ${slideContent || 'User insight processing...'}\n• Implication for Level Design\n• Validation metric required`;
        } else if (lowerInput.includes('export') && lowerInput.includes('tab')) {
            reply = "Which tab would you like to export? (e.g., Overview, Cognitive Map, Benchmarking)";
        } else if (lowerInput.includes('overview') || lowerInput.includes('cognitive') || lowerInput.includes('benchmarking')) {
             reply = `Preparing PDF export for the "${input}" section... Done.`;
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
             reply = "Hello! Ready to document your design feedback.";
        }

        const botMsg: Message = {
            id: Date.now() + 1,
            text: reply,
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-[700px] bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
            <h3 className="font-bold text-slate-800 text-lg">Design Jury Notes</h3>
            <p className="text-xs text-slate-500 font-medium">Live Session Capture</p>
        </div>
        <button className="text-xs font-bold text-indigo-600 flex items-center gap-2 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors">
            <Save size={16} /> Save Log
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${msg.sender === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {msg.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[70%] p-4 rounded-3xl text-base font-medium leading-relaxed shadow-sm whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-indigo-50 text-slate-800 rounded-tr-none' : 'bg-slate-50 text-slate-700 rounded-tl-none'}`}>
                    <p>{msg.text}</p>
                    <span className="text-xs text-slate-400 mt-2 block opacity-70 font-bold tracking-wide">{msg.timestamp}</span>
                </div>
            </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="p-6 border-t border-slate-100 bg-white">
        <div className="flex gap-4">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your feedback..."
                className="flex-grow bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all placeholder:text-slate-400 font-medium"
            />
            <button 
                onClick={handleSend}
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-2xl transition-colors shadow-lg shadow-indigo-200"
            >
                <Send size={24} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
