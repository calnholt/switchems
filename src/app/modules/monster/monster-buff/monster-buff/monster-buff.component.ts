import { ImageService } from './../../../data/image.service';
import { getAbilityText } from './../../../common/cards';
import { IMAGES, SYMBOLS } from './../../../../constants';
import { Css, Path } from './../../../../types/dataTypes';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Buff } from '../../model/monster';
import { MonsterService } from '../../monster.service';

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

  constructor(
    public imageService: ImageService,
    private monsterService: MonsterService
  ) { }

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

  getBackgroundImageCss(): string {
    const elems =  this.monsterService.getMonsters().find(m => m.monsterName === this.buff.monsterName).elements.sort((a,b) => a.localeCompare(b));
    let out = '';
    elems.forEach(e => out += e.toLowerCase());
    return out;
  }

}
