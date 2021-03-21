import { Path, ELEMENTS, ELEMENT_PATH_COLOR } from './../../../types/dataTypes';
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

  getNumberOfMonsterComplexity(num: number): number {
    return this.monsters.filter(m => m.complexity === num).length;
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
}
