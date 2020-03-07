import { MonsterFormComponent } from 'src/app/modules/monster/monster-form/monster-form.component';
import { Routes } from '@angular/router';

export const MonsterRoutes: Routes = [
  {
    path: 'monster/:monsterName',
    component: MonsterFormComponent
  },
  {
    path: 'monster/actions/:actionName',
    component: MonsterFormComponent
  },
  {
    path: 'monster/buff/:buffId',
    component: MonsterFormComponent
  }
];
