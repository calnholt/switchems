import { MaterialModule } from 'src/app/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonsterModule } from './modules/monster/monster.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewAllModule } from './modules/view-all/view-all.module';
import { RouterModule } from '@angular/router';
import { PrintModule } from './modules/print/print.module';
import { RulebookModule } from './modules/rulebook/rulebook.module';
import { CommonComponentsModule } from 'card-builder-framework';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutingModule, {
      enableTracing: false
    }),
    BrowserModule,
    MonsterModule,
    ViewAllModule,
    BrowserAnimationsModule,
    PrintModule,
    RulebookModule,
    MaterialModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
