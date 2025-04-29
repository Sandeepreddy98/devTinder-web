import { io } from "socket.io-client";
import { SERVER_URI } from "./constants-env";

export const createSocketConnection = () => {
    return io(SERVER_URI)
}