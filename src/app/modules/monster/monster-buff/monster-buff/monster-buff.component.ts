import { getAbilityText } from './../../../common/cards';
import { SYMBOLS } from './../../../../constants';
import { Css, Path } from './../../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';
import { Buff } from '../../model/monster';

@Component({
  selector: 'monster-buff',
  templateUrl: './monster-buff.component.html',
  styleUrls: ['./monster-buff.component.scss']
})
export class MonsterBuffComponent implements OnInit {
  @Input() buff: Buff;
  buffTextHtml: string;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor() { }

  ngOnInit() {
    this.buffTextHtml = this.buff.buffText;
  }

  getTimingRomanNumeral(): string {
    if (this.buff.timing === 'Pre-Actions') {return 'I'; }
    if (this.buff.timing === 'With Attack') {return 'II'; }
    if (this.buff.timing === 'Post Actions') {return 'III'; }
    if (this.buff.timing === 'None') {return 'X'; }
  }

  getBuffImagePath(): Path {
    return `${SYMBOLS}buff_gray.png`;
  }

  getSuccessImagePath(): Path {
    return `${SYMBOLS}success.png`;
  }

  getFailImagePath(): Path {
    return `${SYMBOLS}fail.png`;
  }

  getAbilityText(text: string, isFlipText: boolean): string {
    if (!text) {
      return '';
    }
    if (isFlipText) {
      text = `!: ${text}`;
    }
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
