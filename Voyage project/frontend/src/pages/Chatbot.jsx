import React, { useState } from "react";

function Chatbot() {
  const [chat, setChat] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); 

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setChat([...chat, { sender: "User", text: userMessage }]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, { sender: "AI", text: data.reply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setUserMessage("");
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#474769] text-white p-3 rounded-full shadow-lg hover:bg-[#5a5a8c] transition hover:scale-105"
      >
        💬 Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-[#474769] text-white p-3 rounded-t-xl flex justify-between items-center">
            <h2 className="font-bold">Voyage Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-lg">✖</button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.sender === "User"
                    ? "ml-auto bg-[#474769] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#474769]"
            />
            <button
              onClick={sendMessage}
              className="bg-[#474769] text-white px-4 py-2 rounded-lg hover:bg-[#5a5a8c]"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
