import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {

  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
      const getMessages = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/messages/${selectedConversation._id}`);
          const data = await res.json();
          console.log(data);
          if (data.error) {
            throw new Error(data.error);
          }
          setMessages(data);
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
      };

    if (selectedConversation?._id) getMessages();
  },[selectedConversation?._id, setMessages])

  return { loading, messages };
}

export default useGetMessages