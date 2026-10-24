# SplitCanvas

Monorepo : interface web **Angular (Vite + TypeScript)** + serveur **Node.js / Express / Socket.IO (TypeScript)**.

## Structure

```
SplitCanvas/
├── client/    # Angular (builder @angular/build = esbuild + serveur Vite)
├── server/    # Express + Socket.IO en TypeScript
├── shared/    # Types partagés client/serveur (événements Socket.IO...)
└── package.json  # npm workspaces
```

## Démarrage

```bash
npm install
npm run dev
```

- Client : http://localhost:4200
- Serveur : http://localhost:3000 (le client proxifie `/socket.io` vers lui)

## Production

```bash
npm run build
npm run start      # sert l'API + le client buildé (client/dist/client/browser)
```
