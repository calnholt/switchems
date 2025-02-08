import { getAbilityText } from './../../common/cards';
import { MonsterComplete } from './../model/monster';
import { Component, OnInit, Input, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, OnChanges, SimpleChanges, DoCheck, IterableDiffers, KeyValueDiffers, KeyValueDiffer, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ELEMENTS, Css, Path } from './../../../types/dataTypes';
import { ELEMENTS_COLOR, ELEMENTS_GRAY, HP, IMAGES, SYMBOLS } from './../../../constants';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonsterCardComponent {
  @Input() monster: MonsterComplete;
  ELEMENT_LIST = ELEMENTS;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  success: Path = SYMBOLS + 'success.png';
  fail: Path = SYMBOLS + 'fail.png';
  flipEvent: Path = SYMBOLS + 'flip-event.png';
  superEffective: Path = SYMBOLS + 'super-effective-white.png';
  switchDefense: Path = SYMBOLS + 'switch-defense-white.png';
  previousAbilityText: string;

  constructor() {
  }

  getElementColorImg(element: string): Path {
    return `${ELEMENTS_COLOR}${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string): Path {
    return `${ELEMENTS_GRAY}${element.toLocaleLowerCase()}.png`;
  }

  getHpIcon(): Path {
    return `${HP}${this.monster.hp}.png`;
  }

  getAbilityText(text: string): string {
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

  getMonsterImage(): string {
    return `${IMAGES}/monsters/${this.monster.monsterName.toLowerCase()}.png`;
  }

  getBackgroundImageCss(): string {
    const elems = this.monster.elements.sort((a,b) => a.localeCompare(b));
    let out = '';
    elems.forEach(e => out += e.toLowerCase());
    return out;
  }

}
