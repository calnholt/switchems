import { ImageService } from './../../../data/image.service';
import { getAbilityText } from './../../../common/cards';
import { IMAGES, SYMBOLS } from './../../../../constants';
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

  getBuffImagePath(): Path {
    return `${SYMBOLS}buff_gray.png`;
  }

  getMonsterImagePath(): Path {
    return `${IMAGES}/monsters/${this.buff.monsterName.toLowerCase()}.png`;
  }

  getAbilityText(text: string, isFlipText: boolean): string {
    if (!text) {
      return '';
    }
    return getAbilityText(text, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

}
