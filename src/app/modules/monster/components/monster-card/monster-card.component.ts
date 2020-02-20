import { Image, Term } from './../../../data/data';
import { DataService } from './../../../../services/data.service';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { Path, ElemType, ELEMENTS, TERM_CODES, IMAGE_CODES } from './../../../../types/dataTypes';
import { saveAs } from 'file-saver';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: MonsterComplete;
  monsterAbilityHtml: string;
  ELEMENT_LIST = ELEMENTS;
  ICON_PATH: Path = './assets/images';
  ROLE_PATH: Path = this.ICON_PATH + '/roles';
  ELEMENT_COLOR_PATH: Path = this.ICON_PATH + '/elements/color';
  ELEMENT_GRAY_PATH: Path = this.ICON_PATH + '/elements/gray';


  VARIOUS_ICON_DIRECTORY: Path = './assets/images/symbols/';
  ELEMENT_ICON_DIRECTORY: Path = './assets/images/elements/color/';

  TERMS_MAP: any;
  IMG_MAP: any;

  TERMS_ARRAY: string[] = [];
  IMG_ARRAY: string[] = [];

  TERM_CSS: string = 'term';
  ABILITY_IMG_CSS: string = 'term-img';

  ngOnInit() {
    this.monsterAbilityHtml = this.monster.abilityText;
    console.log(JSON.stringify(this.monster, null, 2));
    // const blob = new Blob([JSON.stringify(this.monster, null, 2)], {type : 'application/json'});
    // saveAs(blob, 'abc.json');

  }

  constructor(
    private dataService: DataService,
  ) {}

  getEffectivenessArray(monster: MonsterComplete) {
    const arrs = [].concat(monster.elements.map((el: string) => this.dataService.getAdvantages()[el].advantages));
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
    values.forEach((num: number, i: number) => out.push(this.getEffectivenessSymbol(num)));
    return out;
  }

  getEffectivenessSymbol(num: number): string {
    switch (num) {
      case -2: return '--';
      case -1: return '-';
      case 0: return '';
      case 1: return '+';
      case 2: return '++';
    }
  }

  hasElement(element: ElemType) {
    return this.monster.elements.includes(element);
  }

  getElementColorImg(element: string) {
    return `${this.ELEMENT_COLOR_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getElementGrayImg(element: string) {
    return `${this.ELEMENT_GRAY_PATH}/${element.toLocaleLowerCase()}.png`;
  }

  getRoleIcon() {
    return `${this.ROLE_PATH}/${this.monster.role.toLocaleLowerCase()}.png`;
  }

  getHpIcon() {
    return `${this.ICON_PATH}/symbols/hp/${this.monster.hp}.png`;
  }

  getAbilityText() {
    let innerHtml = this.monster.abilityText;
    TERM_CODES.forEach((term: Term) => {
      while (innerHtml.includes(term.key)) {
          const html = `<br><span class="${this.TERM_CSS}">(${term.value})</span>`;
          innerHtml = innerHtml.replace(term.key, html);
      }
    });
    IMAGE_CODES.forEach((image: Image) => {
      while (innerHtml.includes(image.key)) {
          const html = `<img src="${image.path}" class="${this.ABILITY_IMG_CSS}">`;
          innerHtml = innerHtml.replace(image.key, html);
      }
    });
    return innerHtml;
  }

}
