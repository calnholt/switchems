import { Term } from './../../data/data';
import { MonsterService } from './../monster.service';
import { ELEMENTS, Path, TERM_CODES } from './../../../types/dataTypes';
import { getAbilityText } from './../../common/cards';
import { ImageService } from './../../data/image.service';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IMAGES } from 'src/app/constants';

@Component({
  selector: 'monster-reference',
  templateUrl: './monster-reference.component.html',
  styleUrls: ['./monster-reference.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MonsterReferenceComponent implements OnInit {
  @Input() monster: MonsterComplete;
  ELEMENT_LIST = ELEMENTS;

  IMG_CSS = 'ref-img';
  TERM_CSS = 'ref-term';

  constructor(public imageService: ImageService, public monsterService: MonsterService) { }

  ngOnInit() {
  }

  getAbilityText(str: string, noClean?: boolean): string {
    if (!str){
      return '';
    }
    return getAbilityText(noClean ? this.cleanTerms(str) : this.cleanText(str), this.TERM_CSS, this.IMG_CSS);
  }

  cleanTerms(str: string): string {
    let strCopy = str;
    TERM_CODES.forEach((term: Term) => {
      while (strCopy.includes(term.key)) {
          strCopy = strCopy.replace(term.key, '');
      }
    });
    return strCopy;
  }

  cleanText(str: string): string {
    let strCopy = this.cleanTerms(str);
    const htmls = ['<br>'];
    htmls.forEach(html => {
      while (strCopy.includes(html)) {
        strCopy = strCopy.replace(html, '');
      }
    });
    while (strCopy.includes('<em>')) {
      const start = strCopy.indexOf('<em>');
      const end = strCopy.indexOf('</em>');
      const strToRemove = strCopy.substr(start, end - start);
      strCopy = strCopy.replace(strToRemove, '');
    }
    return strCopy;
  }

  getBackgroundImageCss(): string {
    const elems = this.monster.elements.sort((a,b) => a.localeCompare(b));
    let out = '';
    elems.forEach(e => out += e.toLowerCase());
    return out;
  }

    getMonsterImagePath(): Path {
      return `${IMAGES}/monsters/${this.monster.monsterName.toLowerCase()}.png`;
    }


}
