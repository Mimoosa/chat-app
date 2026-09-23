import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser) {
      if (socket) socket.close();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSocket(null);
      return;
    }

    const newSocket = io("http://localhost:5000", {
      query: {
        userId: authUser._id,
      },
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [authUser]);

  useEffect(() => {
    if (!socket) return;

    // socket.on() is used to listen to the events. can ve used vot on client and server side
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => socket.off("getOnlineUsers");
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
