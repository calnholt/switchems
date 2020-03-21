import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input() label?: string;
  @Input() model: any;
  @Input() options: Array<any>;
  @Input() property: string;
  @Input() multi?: boolean;
  @Input() index?: number; // used when model is an item from array
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue !== changes.model.previousValue) {
      this.ngOnInit();
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
