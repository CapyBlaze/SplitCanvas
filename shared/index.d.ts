export interface Stroke {
  id: string;
  color: string;
  size: number;
  points: { x: number; y: number }[];
}

export interface ServerToClientEvents {
  'stroke:new': (stroke: Stroke) => void;
  'users:count': (count: number) => void;
}

export interface ClientToServerEvents {
  'stroke:new': (stroke: Stroke) => void;
}
