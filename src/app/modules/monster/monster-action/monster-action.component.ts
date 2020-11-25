import { ELEMENTS_GRAY, SYMBOLS, ELEMENTS_COLOR } from './../../../constants';
import { ELEMENTS, Css, Path, ImageCode, ElemType, getAdvantages } from './../../../types/dataTypes';
import { Action } from './../model/monster';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { getAbilityText } from './../../common/cards';

@Component({
  selector: 'monster-action',
  templateUrl: './monster-action.component.html',
  styleUrls: ['./monster-action.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterActionComponent implements OnInit {
  @Input() action: Action;
  ELEMENTS = ELEMENTS;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor() { }

  ngOnInit() { }

  isAdvantage(i: number): boolean {
    return getAdvantages(this.action.element)[i] === 1;
  }

  getElementImageGrayPath(elemType: ElemType): Path {
    return `${ELEMENTS_GRAY}/${elemType.toLowerCase()}.png`;
  }

  getElementImageColorPath(elemType?: ElemType): Path {
    if (!elemType) {
      return `${ELEMENTS_COLOR}/${this.action.element.toLowerCase()}.png`;
    }
    return `${ELEMENTS_COLOR}/${elemType.toLowerCase()}.png`;
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

}
