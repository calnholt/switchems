import { getAdvantages, getAbilityText } from './../../common/cards';
import { MonsterComplete } from './../model/monster';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ElemType, ELEMENTS, Css, Path } from './../../../types/dataTypes';
import { ELEMENTS_COLOR, ELEMENTS_GRAY, ROLES_PATH, HP, SYMBOLS } from './../../../constants';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  ELEMENT_LIST = ELEMENTS;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  success: Path = SYMBOLS + 'success.png';
  fail: Path = SYMBOLS + 'fail.png';

  ngOnInit() {}

  constructor() {}

  getEffectivenessArray(monster: MonsterComplete): string[] {
    const arrs = [].concat(monster.elements.map((el: ElemType) => getAdvantages(el)));
    let totals = [0, 0, 0, 0, 0, 0];
    // arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
    if (monster.elements.length === 1) {
      totals = arrs[0];
    } else {
      for (let i = 0; i < 6; i++) {
        const elemArr = [];
        for (let j = 0; j < arrs.length; j++) {
          elemArr.push(arrs[j][i]);
        }
        const containsNegative = elemArr.some(e => e < 0);
        const positives = elemArr.filter(e => e > 0);
        if (containsNegative) {
          totals[i] = -1;
        } else if (positives) {
          totals[i] = positives.length;
        } else {
          totals[i] = 0;
        }
      }
    }
    
    const out: string[] = [];
    totals.forEach((num: number, i: number) => out.push(this.getEffectivenessSymbol(num)));
    return out;
  }

  getEffectivenessSymbol(num: number): string {
    const shield = `<img src="./assets/images/symbols/switch-defense.png" class="shield">`;
    const effective = `<img src="./assets/images/symbols/effective.png" class="effective">`;
    const superEff = `<img src="./assets/images/symbols/super-effective.png" class="effective">`;
    switch (num) {
      case 2: return `<span class="value">6</span>` + shield;
      case 1: return '<span class="value">3</span>' + shield;
      case 0: return '';
      case -1: return superEff;
      case -2: return superEff;
    }
  }

  hasElement(element: ElemType): boolean {
    return this.monster.elements.includes(element);
  }

  getElementColorImg(element: string): Path {
    return `${ELEMENTS_COLOR}${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string): Path {
    return `${ELEMENTS_GRAY}${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon(): Path {
    return `${ROLES_PATH}${this.monster.role.toLocaleLowerCase()}.png`;
  }

  getHpIcon(): Path {
    return `${HP}${this.monster.hp}.png`;
  }

  getAbilityText(): string {
    return getAbilityText(this.monster.abilityText, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
