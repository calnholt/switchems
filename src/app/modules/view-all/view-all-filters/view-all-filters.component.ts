import { ELEMENTS, ROLES, ElemType, Role } from './../../../types/dataTypes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MonsterComplete } from '../../monster/model/monster';
import { SelectionChange } from '@angular/cdk/collections';

export class MonsterForm {
  monsterName?: string = null;
  elements?: Array<ElemType> = new Array<ElemType>();
  hpMin?: number = 0;
  hpMax?: number = 20;
  roles?: Array<Role> = new Array<Role>();
  attackMin?: number = 0;
  attackMax?: number = 10;
  speedMin?: number = 0;
  speedMax?: number = 9;
  attackElements?: Array<ElemType> = new Array<ElemType>();
  buffMin?: number = 0;
  buffMax?: number = 5;
  discardMin?: number = 0;
  discardMax?: number = 5;
  drawMin?: number = 0;
  drawMax?: number = 5;
  auraMin?: number = 1;
  auraMax?: number = 10;
  statusFlg?: boolean = false;
  reactionFlg: boolean = false;
}

@Component({
  selector: 'view-all-filters',
  templateUrl: './view-all-filters.component.html',
  styleUrls: ['./view-all-filters.component.scss']
})
export class ViewAllFiltersComponent implements SelectionChange<any>, OnInit {
  source: import('@angular/cdk/collections').SelectionModel<any>;
  added: any[];
  removed: any[];

  @Output() filtersChanged: EventEmitter<any> = new EventEmitter<any>();

  elementList = ELEMENTS;
  roleList = ROLES;
  form: MonsterForm = new MonsterForm();
  checked: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  applyFilters() {
    console.log(this.form);
    this.filtersChanged.emit(this.form);
  }

  clearFilters() {
    this.form = new MonsterForm();
    this.filtersChanged.emit(this.form);
  }


}
