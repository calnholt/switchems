import { getAbilityText } from './../../../../common/cards';
import { SYMBOLS } from './../../../../../constants';
import { Css, Path } from './../../../../../types/dataTypes';
import { Component, OnInit, Input } from '@angular/core';
import { MonsterComplete, Buff } from '../../../model/monster';

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
    if (this.buff.timing === 1) {return 'I'; }
    if (this.buff.timing === 2) {return 'II'; }
    if (this.buff.timing === 3) {return 'III'; }
    if (this.buff.timing === 4) {return 'IV'; }
    if (this.buff.timing === 5) {return 'V'; }
    if (this.buff.timing === 0) {return '!'; }
  }

  getTimingText(): string {
    if (this.buff.timing === 1) {return 'Pre-Switch'; }
    if (this.buff.timing === 2) {return 'Pre-Attack'; }
    if (this.buff.timing === 3) {return 'With Attack'; }
    if (this.buff.timing === 4) {return 'Post Attack'; }
    if (this.buff.timing === 0) {return 'Flip Event'; }
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
