import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/canvas/canvas').then((m) => m.Canvas),
  },
  { path: '**', redirectTo: '' },
];
