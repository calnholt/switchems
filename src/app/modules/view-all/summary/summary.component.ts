import { Path, ELEMENTS, ELEMENT_PATH_COLOR, getElementIndex } from './../../../types/dataTypes';
import { ElemType } from 'src/app/types/dataTypes';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() monsters: Array<MonsterComplete>;
  @Input() filteredMonsters: Array<MonsterComplete>;
  ELEMENTS = ELEMENTS;
  COMPLEXITY = [1, 2, 3];

  constructor() { }

  ngOnInit() {

  }

  getElementColorImg(elem: string): Path {
    return `${ELEMENT_PATH_COLOR}${elem.toLocaleLowerCase()}.png`;
  }

  getNumberOfMonstersPerElement(elem: ElemType): number {
    return this.monsters.filter(m => m.elements.includes(elem)).length;
  }

  getNumberOfAttacksPerElement(elem: ElemType): number {
    let num = 0;
    this.monsters.forEach(m => {
      m.actions.forEach(a => {
        if ((a.attack !== undefined || a.attack !== null) && a.element === elem && !a.statusFlg) {
          num++;
        }
      });
    });
    return num;
  }

  getNumberOfWeaknessesPerMonster(elem: ElemType): number {
    let num = 0;
    this.monsters.forEach(m => {
      const effectiveness = m.getEffectivenessArray();
      const index = getElementIndex(elem);
      if (effectiveness[index] < 0) {
        num++;
      }
    });
    return num;
  }

  getNumberOfResistancesPerMonster(elem: ElemType): number {
    let num = 0;
    this.monsters.forEach(m => {
      const effectiveness = m.getEffectivenessArray();
      const index = getElementIndex(elem);
      if (effectiveness[index] > 0) {
        num++;
      }
    });
    return num;
  }
}
