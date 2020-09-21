import { Role, ELEMENTS, ROLES, Path } from './../../../types/dataTypes';
import { ElemType } from 'src/app/types/dataTypes';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { ELEMENTS_COLOR, ROLES_PATH } from 'src/app/constants';

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

  getElementColorImg(element: string): Path {
    return `${ELEMENTS_COLOR}${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon(role: string): Path {
    return `${ROLES_PATH}${role.toLocaleLowerCase()}.png`;
  }

  getNumberOfMonstersPerElement(element: ElemType): number {
    return this.monsters.filter(m => m.elements.includes(element)).length;
  }

  getNumberOfMonstersPerRole(role: Role): number {
    return this.monsters.filter(m => m.role === role).length;
  }

  getNumberOfMonsterComplexity(num: number): number {
    return this.monsters.filter(m => m.complexity === num).length;
  }

  // getNumberOfAttacksPerElement()

}
