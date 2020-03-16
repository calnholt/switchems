import { getAbilityText } from './../../../common/cards';
import { SYMBOLS } from './../../../../constants';
import { Css, Path } from './../../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';
import { MonsterComplete, Buff } from '../../model/monster';

@Component({
  selector: 'monster-buff',
  templateUrl: './monster-buff.component.html',
  styleUrls: ['./monster-buff.component.scss']
})
export class MonsterBuffComponent implements OnInit {
  @Input() monster: MonsterComplete;
  @Input() buff: Buff;
  buffTextHtml: string;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor() { }

  ngOnInit() {
    this.buffTextHtml = this.buff.buffText;
  }

  getTimingRomanNumeral(): string {
    if (this.buff.timing === 'Pre-Switch') {return 'I'; }
    if (this.buff.timing === 'Pre-Attack') {return 'II'; }
    if (this.buff.timing === 'With Attack') {return 'III'; }
    if (this.buff.timing === 'Post Attack') {return 'IV'; }
    if (this.buff.timing === 'Flip Event') {return '!'; }
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

  getAbilityText(): string {
    return getAbilityText(this.buff.buffText, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
