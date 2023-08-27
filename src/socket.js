import { io } from "socket.io-client";
import { api } from "./link/API";

export const socket = io(api, {
  autoConnect: false,
});
