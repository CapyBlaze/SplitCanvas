import http from 'node:http';
import { Server } from 'socket.io';
import type { ClientToServerEvents, ServerToClientEvents } from '@splitcanvas/shared';
import { createApp } from './app.js';
import { env } from './config/env.js';
import { registerSockets } from './sockets/index.js';

const app = createApp();
const httpServer = http.createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: { origin: env.clientOrigin },
});

registerSockets(io);

httpServer.listen(env.port, () => {
  console.log(`SplitCanvas server -> http://localhost:${env.port}`);
});
