import { useState } from "react"
import toast from 'react-hot-toast';
import useConversation from "../zustand/useConversation";


const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {

    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);

    } catch (error) {
      toast.error(error.message, {
        style: {
          background: "#105437ee ",
          border: "1px solid #476456ee",
          padding: "16px",
        },
        iconTheme: {
          primary: "#C7203Cee",
          secondary: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, sendMessages };
}

export default useSendMessage