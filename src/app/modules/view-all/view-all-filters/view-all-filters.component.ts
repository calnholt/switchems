import { ELEMENTS } from './../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-all-filters',
  templateUrl: './view-all-filters.component.html',
  styleUrls: ['./view-all-filters.component.scss']
})
export class ViewAllFiltersComponent implements OnInit {
  elementList;
  multi = Array<any>();

  constructor() {
    this.elementList = ELEMENTS;
  }

  ngOnInit() {}

  test(value: any) {
    console.log(value);
  }

}
