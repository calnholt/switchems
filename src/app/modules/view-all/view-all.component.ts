import { Component, OnInit } from '@angular/core';
import { MonsterComplete } from '../monster/model/monster';
import { loadMonsters } from '../import/json-to-obj';
import { MonsterForm } from './view-all-filters/view-all-filters.component';

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
    this.filteredMonsters = filteredMonsters;
  }

  isWithinFormSettings(m: MonsterComplete, form: MonsterForm): boolean {
    const isRole = this.filterRole(m, form);
    const isElements = this.filterElement(m, form);
    const isHp = this.filterHp(m, form);
    return isRole && isElements && isHp;
  }

  filterRole(m: MonsterComplete, form: MonsterForm): boolean {
    let isRoles: boolean = true;
    if (form.roles.length > 0) {
      isRoles = form.roles.includes(m.role);
    }
    return isRoles;
  }

  filterElement(m: MonsterComplete, form: MonsterForm): boolean {
    let isElements: boolean;
    if (form.elements.length > 0) {
      isElements = false;
      form.elements.forEach(e => {
        if (m.elements.includes(e)) {
          isElements = true;
        }
      });
    } else {
      isElements = true;
    }
    return isElements;
  }

  filterHp(m: MonsterComplete, form: MonsterForm): boolean {
    return m.hp >= form.hpMin && m.hp <= form.hpMax;
  }


}
