import { DataService } from './../../../../services/data.service';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  monsterAbilityHtml: string;
  ELEMENT_LIST: string[] = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Skull'];
  ICON_PATH: string = './assets/images';
  ROLE_PATH: string = this.ICON_PATH + '/roles';
  ELEMENT_COLOR_PATH: string = this.ICON_PATH + '/elements/color';
  ELEMENT_GRAY_PATH: string = this.ICON_PATH + '/elements/gray';
  CONVERSION_MAP: any = {
    '-2': '--',
    '-1': '-',
    '0': '',
    '1': '+',
    '2': '++',
};

  VARIOUS_ICON_DIRECTORY: string = './assets/images/symbols/';
  ELEMENT_ICON_DIRECTORY: string = './assets/images/elements/color/';

  TERMS_MAP: any;
  IMG_MAP: any;

  TERMS_ARRAY: string[] = [];
  IMG_ARRAY: string[] = [];

  TERM_CSS: string = 'term';
  ABILITY_IMG_CSS: string = 'term-img';

  ngOnInit() {
    this.monsterAbilityHtml = this.monster.abilityText;
  }

  constructor(
    private dataService: DataService,
  ) {
    this.TERMS_MAP = dataService.getTermsMap();
    this.IMG_MAP = dataService.getImgMap();
    Object.keys(this.TERMS_MAP).forEach(term => this.TERMS_ARRAY.push(term));
    Object.keys(this.IMG_MAP).forEach(img => this.IMG_ARRAY.push(img));
  }

  getEffectivenessArray(monster: MonsterComplete) {
    const arrs = [].concat(monster.elementLks.map((el: string) => this.dataService.getAdvantages()[el].advantages));
    const totals = [0, 0, 0, 0, 0, 0];
    arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
    const values = totals.map(num => {
        if (num !== 0) {
            return num * -1;
        } else {
            return num;
        }
    });
    const out: string[] = [];
    values.forEach((num: number, i: number) => out.push(this.CONVERSION_MAP[num]));
    return out;
  }

  hasElement(element: string) {
    return this.monster.elementLks.includes(element);
  }

  getElementColorImg(element: string) {
    return `${this.ELEMENT_COLOR_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string) {
    return `${this.ELEMENT_GRAY_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon() {
    return `${this.ROLE_PATH}/${this.monster.roleLk.toLocaleLowerCase()}.png`;
  }

  getHpIcon() {
    return `${this.ICON_PATH}/symbols/hp/${this.monster.hp}.png`;
  }

  getAbilityText() {
    let innerHtml = this.monster.abilityText;
    this.TERMS_ARRAY.forEach((term: string) => {
      while (innerHtml.includes(term)) {
          const html = `<br><span class="${this.TERM_CSS}">(${this.TERMS_MAP[term]})</span>`;
          innerHtml = innerHtml.replace(term, html);
      }
    });
    this.IMG_ARRAY.forEach((img: string) => {
      while (innerHtml.includes(img)) {
          const html = `<img src="${this.IMG_MAP[img]}" class="${this.ABILITY_IMG_CSS}">`;
          innerHtml = innerHtml.replace(img, html);
      }
    });
    return innerHtml;
  }

}
