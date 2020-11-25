import { getAbilityText } from './../../common/cards';
import { MonsterComplete } from './../model/monster';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ELEMENTS, Css, Path } from './../../../types/dataTypes';
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
  flipEvent: Path = SYMBOLS + 'flip-event.png';
  superEffective: Path = SYMBOLS + 'super-effective-white.png';
  switchDefense: Path = SYMBOLS + 'switch-defense-white.png';

  ngOnInit() {}

  constructor() {}

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
