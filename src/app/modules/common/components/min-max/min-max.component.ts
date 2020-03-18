import { Css } from './../../../../types/dataTypes';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent implements SelectionChange<any>, OnChanges, OnInit {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  minModel: any;
  maxModel: any;

  @Input() label: string;
  // TODO: min and max not limiting value
  @Input() min: number;
  @Input() max: number;
  @Input() property: string;
  @Input() model: any;
  @Input() class?: Css;
  @Output()
  selectionChange?: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.minModel = this.model[`${this.property}Min`];
    this.maxModel = this.model[`${this.property}Max`];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue !== changes.model.previousValue) {
      this.ngOnInit();
    }
  }

  selectionChanged(event: MatSelectChange) {
    this.model[`${this.property}Min`] = this.minModel;
    this.model[`${this.property}Max`] = this.maxModel;
    this.selectionChange.emit();
  }

}
