import { io } from "socket.io-client";
import { api } from "./link/API";

const userToken = sessionStorage.getItem("nunsa_user");

let socket = null;
if (userToken) {
  socket = io(api, {
    query: {
      token: sessionStorage.getItem("nunsa_user"),
    },
    autoConnect: false,
  });
}

export default socket;