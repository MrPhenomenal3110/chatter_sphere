import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  try {
    console.log("Websocket connected successfully");
  } catch (err) {
    console.log("Error connecting websocket: ", err);
  }
});

httpServer.listen(6969);
