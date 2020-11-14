import { Role, ROLES, Path, ELEMENTS, ELEMENT_PATH_COLOR } from './../../../types/dataTypes';
import { ElemType } from 'src/app/types/dataTypes';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { ROLES_PATH } from 'src/app/constants';
import { getElementIndex } from '../../common/cards';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() monsters: Array<MonsterComplete>;
  @Input() filteredMonsters: Array<MonsterComplete>;
  ELEMENTS = ELEMENTS;
  ROLES = ROLES;
  COMPLEXITY = [1, 2, 3];
  ROLES_PATH = ROLES_PATH;

  constructor() { }

  ngOnInit() {

  }

  getElementColorImg(elem: string): Path {
    return `${ELEMENT_PATH_COLOR}${elem.toLocaleLowerCase()}.png`;
  }

  getRoleIcon(role: string): Path {
    return `${ROLES_PATH}${role.toLocaleLowerCase()}.png`;
  }

  getNumberOfMonstersPerElement(elem: ElemType): number {
    return this.monsters.filter(m => m.elements.includes(elem)).length;
  }

  getNumberOfMonstersPerRole(role: Role): number {
    return this.monsters.filter(m => m.role === role).length;
  }

  getNumberOfMonsterComplexity(num: number): number {
    return this.monsters.filter(m => m.complexity === num).length;
  }

  getNumberOfAttacksPerElement(elem: ElemType): number {
    let num = 0;
    this.monsters.forEach(m => {
      m.actions.forEach(a => {
        if ((a.attack !== undefined || a.attack !== null) && a.element === elem) {
          num++;
        }
      });
    });
    return num;
  }

  getTotalModifiersPerElement(elem: ElemType): number {
    let total = 0;
    // const index = getElementIndex(elem);
    // this.monsters.forEach(m => {
    //   m.actions.forEach(a => {
    //     total += a.modifiers[index];
    //   });
    // });
    return total;
  }

}
