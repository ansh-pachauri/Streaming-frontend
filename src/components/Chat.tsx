import { useEffect } from "react";
import axios from "axios";
import { useRef, useState } from "react";

interface UserMessage {
  content: string;
  id: string;
  isSent: boolean;
}

export const Chat = () => {
  const [messages, setMessages] = useState<UserMessage[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("connected");
    };
    socket.onclose = () => {
      console.log("disconnected");
    };

    wsRef.current = socket;

    //connect to the server 
    async function getMessages() {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/chat");
        const data = response.data;
        setMessages((m) => [
          ...m,
          {
            content: data.message.content,
            id: crypto.randomUUID(),
            isSent: false,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();

    //user recieve message
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((m) => [
          ...m,
          {
            content: data.message.content,
            id: crypto.randomUUID(),
            isSent: true,
          },
        ]);
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    };

    return () => {
      socket.close(); //disconnect when component unmounts
    };
  }, []);

  return (
    <div className="flex bg-black flex-col h-auto w-full p-4 rounded-md">
      <div className="h-96 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 flex ${
              msg.isSent ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`p-2 rounded-lg max-w-[70%] ${
                msg.isSent
                  ? "bg-purple-500 text-white ml-auto"
                  : "bg-white-500 text-black mr-auto"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-slate-800 p-1 mt-8 flex justify-between rounded-md gap-2 items-center">
        <input
          type="text"
          ref={inputRef}
          placeholder={"Type your message"}
          className="w-full border rounded-lg p-2 flex"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const messageContent = inputRef.current?.value;
              if (
                messageContent &&
                wsRef.current?.readyState === WebSocket.OPEN
              ) {
                wsRef.current?.send(
                  JSON.stringify({
                    type: "chat",
                    message: { content: messageContent },
                  })
                );
                setMessages((m) => [
                  ...m,
                  {
                    id: crypto.randomUUID(),
                    content: messageContent,
                    isSent: true,
                  },
                ]);
                inputRef.current!.value = "";
              }
            }
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => {
            const messageContent = inputRef.current?.value;
            if (
              messageContent &&
              wsRef.current?.readyState === WebSocket.OPEN
            ) {
              wsRef.current?.send(
                JSON.stringify({
                  type: "chat",
                  message: { content: messageContent },
                })
              );
              setMessages((m) => [
                ...m,
                {
                  id: crypto.randomUUID(),
                  content: messageContent,
                  isSent: true,
                },
              ]);
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
