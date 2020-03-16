import { MatSelectChange } from '@angular/material/select';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit, SelectionChange<any> {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Input() label: string;
  @Input() parent: any;
  @Input() property: string;
  @Input() min?: number;
  @Input() max?: number;
  model: any;
  selectionChange?: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.model = this.parent[this.property];
  }

  selectionChanged(event: MatSelectChange) {
    this.model = event.value;
    this.selectionChange.emit();
  }

}
