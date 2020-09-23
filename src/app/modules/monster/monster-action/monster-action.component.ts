import { ELEMENTS_GRAY, SYMBOLS, ELEMENTS_COLOR } from './../../../constants';
import { ELEMENTS, Css, Path, ImageCode, ElemType } from './../../../types/dataTypes';
import { Action } from './../model/monster';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { getAbilityText, getAdvantages } from './../../common/cards';

@Component({
  selector: 'monster-action',
  templateUrl: './monster-action.component.html',
  styleUrls: ['./monster-action.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterActionComponent implements OnInit {
  @Input() action: Action;
  actionTextHtml: string;
  // need to get reversed array to line up with monster
  ELEMENTS_LIST = [ELEMENTS[5], ELEMENTS[4], ELEMENTS[3], ELEMENTS[2], ELEMENTS[1], ELEMENTS[0]];
  EMPTY_MODIFIER = [1, 1, 1, 1, 1, 1];

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor() { }

  ngOnInit() {
    this.actionTextHtml = this.action.abilityText;
  }

  getElementLowerCase(): string {
    return this.action.element.toLowerCase();
  }

  isDisadvantage(i: number): boolean {
    return getAdvantages(this.action.element).reverse()[i] === -1;
  }

  isModifierAllZero(): boolean {
    return this.action.modifiers[0] === 0 && this.action.modifiers[1] === 0 && this.action.modifiers[2] === 0 &&
      this.action.modifiers[3] === 0 && this.action.modifiers[4] === 0 && this.action.modifiers[5] === 0;
  }

  getModifier(modifier: number): string | number {
    if (modifier === null) {
      return 'X';
    }
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
    if (code === '[-]') {return this.getImagePath('discard'); }
    if (code === '[+]') {return this.getImagePath('draw'); }
  }

  getAbilityText(): string {
    return getAbilityText(this.action.abilityText, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

  getCardIcons(): Array<ImageCode> {
    const out = Array<ImageCode>();
    for (let i = 0; i < this.action.buff; i++) {
      out.push('[B]');
    }
    for (let i = 0; i < this.action.discard; i++) {
      out.push('[-]');
    }
    for (let i = 0; i < this.action.draw; i++) {
      out.push('[+]');
    }
    return out;
  }

  hasElement(element: ElemType): boolean {
    return this.action.element === element;
  }


}
