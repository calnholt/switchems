import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, SelectionChange<any> {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Input() label: string;
  @Input() model: any;
  @Input() options: Array<any>;
  @Input() property: string;
  @Input() multi?: boolean;
  @Input() index?: number;
  @Output()
  selectionChange?: EventEmitter<any> = new EventEmitter<any>();
  formControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();
    if (this.index !== undefined) {
      this.formControl.setValue(this.model[this.property][this.index]);
    } else {
      this.formControl.setValue(this.model[this.property]);
    }
  }

  selectionChanged(event: MatSelectChange) {
    if (this.index !== undefined) {
      this.model[this.property][this.index] = event.value;
    } else {
      this.model[this.property] = event.value;
    }
    this.selectionChange.emit();
  }

}
