import { io } from "socket.io-client";
import { api } from "./link/API";

const userToken = localStorage.getItem("nunsa_user");

let socket = null;
if (userToken) {
  socket = io(api, {
    query: {
      token: localStorage.getItem("nunsa_user"),
    },
    autoConnect: false,
  });
}

export default socket;