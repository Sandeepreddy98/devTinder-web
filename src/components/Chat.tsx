import { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Chat() {
  const [messages, setMessages]: any = useState([]);
  const [message,setNewMessage] = useState("")
  const {targetUserId} = useParams()

  const {_id,firstName} = useSelector((store : any) => store.user);

  useEffect(() => {
    const socket = createSocketConnection()
    socket.emit("joinChat",{firstName,_id,targetUserId})
    socket.on("messageFromServer",({firstName,_id,targetUserId,text}) => {
      setMessages((prevMessages : any) => [...prevMessages,{firstName,text}])
    })

    return () => {
      socket.disconnect();
    }
  },[messages])

  const sendMessage = () => {
    const socket = createSocketConnection()
    socket.emit("sendMessage",{firstName,_id,targetUserId,text : message})
    setNewMessage("")
  }

  return (
    <div className="w-1/2 mx-auto mt-5 border border-gray-500 flex flex-col h-[70vh] align-center">
      <h1 className="border-b border-gray-500 p-3 text-center">Chat</h1>

      <div className="flex-1 overflow-y-auto p-3">
        {messages.map((msg: {text : string,firstName : string}, index: number) => (
          <div className="chat chat-start" key={index}>
            <div className="chat-header">
              {msg.firstName}
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>

      <div className="flex p-3 border-t border-gray-500 gap-3">
        <input type="text" value={message} onChange={(e) => setNewMessage(e.target.value)} className="flex-1 border p-2 rounded-l" />
        <button className="btn btn-secondary rounded-r" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
