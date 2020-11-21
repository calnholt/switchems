import { RulebookListComponent } from './rulebook-list/rulebook-list.component';
import { RulebookNumberComponent } from './rulebook-number/rulebook-number.component';
import { RulebookRoutes } from './rulebook.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonsterModule } from '../monster/monster.module';
import { CommonComponentsModule } from '../common/common-components.module';
import { RulebookComponent } from './rulebook.component';

@NgModule({
    imports: [
      RouterModule.forChild(RulebookRoutes),
      CommonModule,
      RouterModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      MonsterModule,
      CommonComponentsModule,
    ],
    declarations: [
      RulebookComponent,
      RulebookNumberComponent,
      RulebookListComponent,
    ],
    exports: [
      RulebookComponent,
      RulebookNumberComponent,
      RulebookListComponent,
    ]
  })
export class RulebookModule { }
