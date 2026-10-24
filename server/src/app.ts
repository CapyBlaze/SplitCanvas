import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { env } from './config/env.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.clientOrigin }));
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', app: 'SplitCanvas' });
  });

  if (env.isProd) {
    const clientDir = path.resolve(__dirname, '../../client/dist/client/browser');
    app.use(express.static(clientDir));
    app.get('*', (_req, res) => res.sendFile(path.join(clientDir, 'index.html')));
  }

  return app;
}
