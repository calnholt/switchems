import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements SelectionChange<any> {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Input() label: string;
  @Input() model: any;
  @Input() options: Array<any>;
  @Input() property: string;
  @Input() multi?: boolean;
  @Output()
  selectionChange?: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectionChanged(event: MatSelectChange) {
    this.model[this.property] = event.value;
    this.selectionChange.emit();
  }

}
