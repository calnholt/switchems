import { ELEMENTS, ROLES, ElemType, Role, BuffTiming, BUFF_TIMINGS } from './../../../types/dataTypes';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SelectionChange } from '@angular/cdk/collections';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export class MonsterForm {
  monsterName?: string = null;
  elements?: Array<ElemType> = new Array<ElemType>();
  hpMin?: number = 0;
  hpMax?: number = 20;
  complexityMin?: number = 1;
  complexityMax?: number = 3;
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
  auraMin?: number = 0;
  auraMax?: number = 10;
  statusFlg?: boolean = false;
  timings?: Array<BuffTiming> = new Array();
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

  @Input() numOfMonsters?: number;
  @Input() numOfActions?: number;
  @Input() numOfBuffs?: number;

  @Output() filtersChanged: EventEmitter<any> = new EventEmitter<any>();

  elementList = ELEMENTS;
  roleList = ROLES;
  timingList = BUFF_TIMINGS;
  form: MonsterForm = new MonsterForm();
  isCollapsed: boolean = true;
  faMinus = faMinus;

  constructor() {
  }

  ngOnInit() {
    this.filtersChanged.emit(this.form);
  }

  applyFilters() {
    this.filtersChanged.emit(this.form);
  }

  clearFilters() {
    this.form = new MonsterForm();
    this.filtersChanged.emit(this.form);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }


}
