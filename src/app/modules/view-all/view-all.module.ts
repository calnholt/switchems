import { PrintModule } from './../print/print.module';
import { RouterModule } from '@angular/router';
import { CommonComponentsModule } from './../common/common-components.module';
import { MaterialModule } from './../../material-module';
import { ViewAllRoutes } from './view-all.routing';
import { ViewAllFiltersComponent } from './view-all-filters/view-all-filters.component';
import { ViewAllDisplayComponent } from './view-all-display/view-all-display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonsterModule } from '../monster/monster.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ViewAllRoutes),
    CommonComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MonsterModule,
    PrintModule
  ],
  declarations: [
    ViewAllComponent,
    ViewAllFiltersComponent,
    ViewAllDisplayComponent,
  ]
})
export class ViewAllModule { }
