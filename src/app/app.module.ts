import { ToolbarComponent } from './modules/common/components/toolbar/toolbar.component';
import { MinMaxComponent } from './modules/common/components/min-max/min-max.component';
import { DropdownComponent } from './modules/common/components/dropdown/dropdown.component';

import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewAllComponent } from './modules/view-all/view-all.component';
import { ViewAllFiltersComponent } from './modules/view-all/view-all-filters/view-all-filters.component';
import { ViewAllDisplayComponent } from './modules/view-all/view-all-display/view-all-display.component';

import { MonsterFormComponent } from 'src/app/modules/monster/components/monster-form/monster-form.component';
import { MonsterCardComponent } from 'src/app/modules/monster/components/monster-card/monster-card.component';
import { MonsterActionComponent } from './modules/monster/components/monster-action/monster-action.component';
import { MonsterBuffComponent } from './modules/monster/components/monster-buff/monster-buff/monster-buff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MonsterFormComponent,
    MonsterCardComponent,
    MonsterActionComponent,
    MonsterBuffComponent,
    ViewAllComponent,
    ViewAllDisplayComponent,
    ViewAllFiltersComponent,
    DropdownComponent,
    MinMaxComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
