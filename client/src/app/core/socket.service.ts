import { Injectable, OnDestroy, signal } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import type { ClientToServerEvents, ServerToClientEvents, Stroke } from '@splitcanvas/shared';

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  private socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

  readonly usersCount = signal(0);

  constructor() {
    this.socket.on('users:count', (count) => this.usersCount.set(count));
  }

  sendStroke(stroke: Stroke) {
    this.socket.emit('stroke:new', stroke);
  }

  onStroke(cb: (stroke: Stroke) => void) {
    this.socket.on('stroke:new', cb);
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
