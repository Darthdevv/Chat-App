import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useLogout = () => {
  const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers:{ "Content-Type": "application/json" },
      })

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chatUser");
      setAuthUser(null);

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
  return {loading, logout}
}

export default useLogout