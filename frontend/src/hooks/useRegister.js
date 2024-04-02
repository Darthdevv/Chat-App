import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const register = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chatUser", JSON.stringify(data));
      setAuthUser(data);
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

  return { loading, register };
};
export default useRegister;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields", {
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
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match", {
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
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters", {
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
    return false;
  }

  return true;
}