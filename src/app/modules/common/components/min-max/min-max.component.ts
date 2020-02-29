import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { Css } from 'src/app/types/dataTypes';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent implements SelectionChange<any>, OnInit {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  minModel: any;
  maxModel: any;

  @Input() label: string;
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

  selectionChanged(event: MatSelectChange) {
    this.model[`${this.property}Min`] = this.minModel;
    this.model[`${this.property}Max`] = this.maxModel;
    this.selectionChange.emit();
  }

}
