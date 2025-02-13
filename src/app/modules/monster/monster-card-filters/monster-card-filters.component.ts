import { ELEMENTS } from './../../../types/dataTypes';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monster-card-filters',
  templateUrl: './monster-card-filters.component.html',
  styleUrls: ['./monster-card-filters.component.scss']
})
export class MonsterCardFiltersComponent implements OnInit {
  @Input() monster: MonsterComplete;
  elementList = ELEMENTS;

  constructor() { }

  ngOnInit() {
  }

}
