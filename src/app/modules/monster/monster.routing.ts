import { MonsterFormComponent } from 'src/app/modules/monster/monster-form/monster-form.component';
import { Routes } from '@angular/router';

export const MonsterRoutes: Routes = [
  {
    path: 'monster/:monsterName',
    component: MonsterFormComponent
  }
];
