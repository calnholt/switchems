import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewAllDisplayComponent } from './modules/view-all/view-all-display/view-all-display/view-all-display.component';

import { MonsterFormComponent } from 'src/app/modules/monster/components/monster-form/monster-form.component';
import { MonsterCardComponent } from 'src/app/modules/monster/components/monster-card/monster-card.component';
import { MonsterActionComponent } from './modules/monster/components/monster-action/monster-action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MonsterFormComponent,
    MonsterCardComponent,
    MonsterActionComponent,
    ViewAllDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
