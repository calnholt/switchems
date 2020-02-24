import { ELEMENTS_GRAY, SYMBOLS, ELEMENTS_COLOR } from './../../../../constants';
import { ELEMENTS, Css, Path, ImageCode, ElemType } from './../../../../types/dataTypes';
import { MonsterComplete, Action } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { getAbilityText } from 'src/app/modules/common/cards';

@Component({
  selector: 'monster-action',
  templateUrl: './monster-action.component.html',
  styleUrls: ['./monster-action.component.scss']
})
export class MonsterActionComponent implements OnInit {
  @Input() monster: MonsterComplete;
  @Input() action: Action;
  actionTextHtml: string;
  // need to get reversed array to line up with monster
  ELEMENTS_LIST = [ELEMENTS[5], ELEMENTS[4], ELEMENTS[3], ELEMENTS[2], ELEMENTS[1], ELEMENTS[0]];
  EMPTY_MODIFIER = [1, 1, 1, 1, 1, 1];
  cardIcons = new Array<ImageCode>();



  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor() { }

  ngOnInit() {
    this.actionTextHtml = this.action.abilityText;
    for (let i = 0; i < this.action.buff; i++) {
      this.cardIcons.push('[B]');
    }
    for (let i = 0; i < this.action.discard; i++) {
      this.cardIcons.push('[-]');
    }
    for (let i = 0; i < this.action.draw; i++) {
      this.cardIcons.push('[+]');
    }
  }

  getElementLowerCase(): string {
    return this.action.element.toLowerCase();
  }

  getModifier(modifier: number): string | number {
    if (modifier > 0) {
      return `+${modifier}`;
    }
    return `${modifier}`;
  }

  getElementImageGrayPath(elemType: ElemType): Path {
    return `${ELEMENTS_GRAY}/${elemType.toLowerCase()}.png`;
  }

  getElementImageColorPath(): Path {
    return `${ELEMENTS_COLOR}/${this.getElementLowerCase()}.png`;
  }

  getImagePath(name: string): Path {
    return `${SYMBOLS}${name}.png`;
  }

  getImagePathFromImageCode(code: ImageCode): Path {
    if (code === '[B]') {return this.getImagePath('buff'); }
    if (code === '[-]') {return this.getImagePath('pay'); }
    if (code === '[+]') {return this.getImagePath('draw'); }
  }

  getAbilityText(): string {
    return getAbilityText(this.action.abilityText, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }


}
