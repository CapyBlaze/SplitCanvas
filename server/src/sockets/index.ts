import type { Server } from "socket.io";
import type { ClientToServerEvents, ServerToClientEvents } from "@splitcanvas/shared";

export type AppServer = Server<ClientToServerEvents, ServerToClientEvents>;

export function registerSockets(io: AppServer) {
    io.on("connection", (socket) => {
        console.log(`[socket] connecté : ${socket.id}`);
        io.emit("users:count", io.engine.clientsCount);

        socket.on("stroke:new", (stroke) => {
            socket.broadcast.emit("stroke:new", stroke);
        });

        socket.on("disconnect", () => {
            console.log(`[socket] déconnecté : ${socket.id}`);
            io.emit("users:count", io.engine.clientsCount);
        });
    });
}
