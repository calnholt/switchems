import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { MatSelectChange } from '@angular/material/select';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextInputComponent implements SelectionChange<any> {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Input() label: string;
  @Input() parent?: any;
  @Input() property: string;
  @Input() isTextArea?: boolean;
  @Input() minRows?: number;
  @Input() maxRows?: number;
  @Input() model: string;
  selectionChange?: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  selectionChanged(event: MatSelectChange) {
    this.selectionChange.emit();
  }

}
