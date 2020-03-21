import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonComponentsModule } from './modules/common/common-components.module';
import { MonsterModule } from './modules/monster/monster.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewAllModule } from './modules/view-all/view-all.module';
import { RouterModule } from '@angular/router';
import { PrintModule } from './modules/print/print.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutingModule, {
      enableTracing: false
    }),
    BrowserModule,
    CommonComponentsModule,
    MonsterModule,
    ViewAllModule,
    BrowserAnimationsModule,
    PrintModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
