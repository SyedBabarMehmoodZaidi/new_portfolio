"use client";

import { useState } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // ✅ ab backend ka URL nahi, Next.js API route call hoga
      const res = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input }),
});

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "bot", text: data.reply } as Message,
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...newMessages,
        { role: "bot", text: "⚠️ Error while contacting AI assistant." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500 shadow-lg text-2xl hover:bg-cyan-400"
        >
          🤖
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-gray-900 text-white rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-cyan-500 text-black p-3 rounded-t-2xl flex justify-between items-center">
            <span className="font-semibold">Babar&apos;s AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-cyan-100 text-black ml-auto"
                    : "bg-gray-700 text-white mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs italic">Thinking...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 rounded-lg px-3 py-2 text-black"
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSend}
              className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
