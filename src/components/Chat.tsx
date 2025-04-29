import { useState } from "react";

function Chat() {
  const [messages, setMessages]: any = useState([
    { text: "Hey Sandeep" },
    { text: "What are you doing" },
  ]);
  console.log(messages);

  return (
    <div className="w-1/2 mx-auto mt-5 border border-gray-500 flex flex-col h-[70vh] align-center">
      <h1 className="border-b border-gray-500 p-3 text-center">Chat</h1>

      <div className="flex-1 overflow-y-auto p-3">
        {messages.map((msg: {text : string}, index: number) => (
          <div className="chat chat-start" key={index}>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      <div className="flex p-3 border-t border-gray-500 gap-3">
        <input type="text" className="flex-1 border p-2 rounded-l" />
        <button className="btn btn-secondary rounded-r">Send</button>
      </div>
    </div>
  );
}

export default Chat;
