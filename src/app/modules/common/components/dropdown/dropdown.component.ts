import { DropdownOption } from './../../models/common';
import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input() label?: string;
  @Input() model: any;
  @Input() options: Array<any>;
  @Input() property?: string;
  @Input() multi?: boolean;
  @Input() index?: number; // used when model is an item from array
  @Input() route?: string; // used when dropdown selection should route to new component
  @Output()
  selectionChange?: EventEmitter<any> = new EventEmitter<DropdownOption>();
  formControl: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formControl = new FormControl();
    if (this.route) {
      return;
    }
    else if (this.index !== undefined) {
      this.formControl.setValue(this.model[this.property][this.index]);
    } 
    else {
      this.formControl.setValue(this.model[this.property]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue !== changes.model.previousValue) {
      this.ngOnInit();
    }
  }

  selectionChanged(event: MatSelectChange) {
    if (this.route) {
      this.formControl = new FormControl(); // clear selection from dropdown
      this.router.navigate([`${this.route}`, `${event.value}`], {});
    }
    if (this.index !== undefined) {
      this.model[this.property][this.index] = event.value;
    } else {
      this.model[this.property] = event.value;
    }
    this.selectionChange.emit();
  }

}
