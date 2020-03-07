import { CommonModule } from '@angular/common';
import { MinMaxComponent } from './components/min-max/min-max.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './../../material-module';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MinMaxComponent,
    ToolbarComponent,
    DropdownComponent,
  ],
  declarations: [
    MinMaxComponent,
    ToolbarComponent,
    DropdownComponent,
  ]
})
export class CommonComponentsModule { }
