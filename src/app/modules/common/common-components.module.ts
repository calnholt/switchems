import { RouterModule } from '@angular/router';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { TextInputComponent } from './components/text-input/text-input.component';
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
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MinMaxComponent,
    ToolbarComponent,
    DropdownComponent,
    TextInputComponent,
    NumberInputComponent
  ],
  declarations: [
    MinMaxComponent,
    ToolbarComponent,
    DropdownComponent,
    TextInputComponent,
    NumberInputComponent,
  ]
})
export class CommonComponentsModule { }
