import { ImageService } from './../../../data/image.service';
import { getAbilityText } from './../../../common/cards';
import { SYMBOLS } from './../../../../constants';
import { Css, Path } from './../../../../types/dataTypes';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Buff } from '../../model/monster';

@Component({
  selector: 'monster-buff',
  templateUrl: './monster-buff.component.html',
  styleUrls: ['./monster-buff.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonsterBuffComponent implements OnInit {
  @Input() buff: Buff;
  buffTextHtml: string;

  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor(public imageService: ImageService) { }

  ngOnInit() {
    this.buffTextHtml = this.buff.buffText;
  }

  getTimingRomanNumeral(): string {
    if (this.buff.timing === 'Pre-Actions') {return 'I'; }
    if (this.buff.timing === 'With Attack') {return 'II'; }
    if (this.buff.timing === 'Post Actions') {return 'III'; }
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
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
