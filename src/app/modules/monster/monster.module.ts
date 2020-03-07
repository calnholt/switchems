import { MonsterComponent } from './monster.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentsModule } from './../common/common-components.module';
import { MaterialModule } from './../../material-module';
import { MonsterRoutes } from './monster.routing';
import { MonsterActionComponent } from './monster-action/monster-action.component';
import { MonsterBuffComponent } from './monster-buff/monster-buff/monster-buff.component';
import { MonsterFormComponent } from 'src/app/modules/monster/monster-form/monster-form.component';
import { MonsterCardComponent } from 'src/app/modules/monster/monster-card/monster-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(MonsterRoutes),
    CommonModule,
    MaterialModule,
    CommonComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MonsterComponent,
    MonsterActionComponent,
    MonsterBuffComponent,
    MonsterFormComponent,
    MonsterCardComponent,
  ],
  exports: [
    MonsterActionComponent,
    MonsterBuffComponent,
    MonsterFormComponent,
    MonsterCardComponent
  ]
})
export class MonsterModule { }
