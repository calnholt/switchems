import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { MonsterComplete, Action } from '../monster/model/monster';
import { loadMonsters } from '../import/json-to-obj';
import { MonsterForm } from './view-all-filters/view-all-filters.component';
import { ElemType } from 'src/app/types/dataTypes';

@Component({
  selector: 'view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  allMonsters = Array<MonsterComplete>();
  filteredMonsters = Array<MonsterComplete>();

  constructor() { }

  ngOnInit() {
    this.allMonsters = loadMonsters();
    this.filteredMonsters = this.allMonsters;
  }

  getFilteredMonsters(): Array<MonsterComplete> {
    return this.allMonsters;
  }

  filterMonsters(form: MonsterForm) {
    let filteredMonsters: Array<MonsterComplete> = this.allMonsters;
    filteredMonsters = filteredMonsters.filter(m => this.isWithinFormSettings(m, form));
    filteredMonsters.forEach(m => m.actions.forEach(a => a.isHighlighted = this.getActionHighlight(a, form)));
    this.filteredMonsters = filteredMonsters;
  }

  isWithinFormSettings(m: MonsterComplete, form: MonsterForm): boolean {
    const isRole = this.filterRole(m, form);
    const isElements = this.filterElement(m.elements, form.elements);
    const isHp = this.filterValueMinMax(m.hp, form.hpMin, form.hpMax);
    return isRole && isElements && isHp;
  }

  filterRole(m: MonsterComplete, form: MonsterForm): boolean {
    let isRoles: boolean = true;
    if (form.roles.length > 0) {
      isRoles = form.roles.includes(m.role);
    }
    return isRoles;
  }

  filterElement(elements: Array<ElemType>, formElements: Array<ElemType>): boolean {
    let isElements: boolean;
    if (formElements.length > 0) {
      isElements = false;
      formElements.forEach(e => {
        if (elements.includes(e)) {
          isElements = true;
        }
      });
    } else {
      isElements = true;
    }
    return isElements;
  }

  getActionHighlight(a: Action, form: MonsterForm) {
    const isElements = this.filterElement([a.element], form.attackElements);
    const isSpeed = this.filterValueMinMax(a.speed, form.speedMin, form.speedMax);
    const isAttack = this.filterValueMinMax(a.attack, form.attackMin, form.attackMax);
    const isBuff = this.filterValueMinMax(a.buff, form.buffMin, form.buffMax);
    const isDiscard = this.filterValueMinMax(a.discard, form.discardMin, form.discardMax);
    const isDraw = this.filterValueMinMax(a.draw, form.drawMin, form.drawMax);
    const isAura = this.filterValueMinMax(a.auraDuration, form.auraMin, form.auraMax);
    return isElements && isSpeed && isAttack && isBuff && isDiscard && isDraw  && isAura;
  }

  filterValueMinMax(value: number, formMin: number, formMax: number): boolean {
    let compareValue: number = value;
    if (value === undefined || value === null) {
      compareValue = 0;
    }
    return compareValue >= formMin && compareValue <= formMax;
  }


}
