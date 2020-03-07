import { Routes } from '@angular/router';

export const AppRoutingModule: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/view-all/view-all.module').then(m => m.ViewAllModule),
  },
];
