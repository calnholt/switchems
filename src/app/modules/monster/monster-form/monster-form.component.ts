import { loadMonsters } from './../../import/json-to-obj';
import { TERM_CODES, IMAGE_CODES, CardTypes, ROLES, ELEMENTS, Css } from './../../../types/dataTypes';
import { MonsterComplete, Action, Buff } from './../model/monster';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAbilityText } from './../../common/cards';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: MonsterComplete;
  originalMonster: MonsterComplete;
  panelOpenState: false;
  termCodes = TERM_CODES;
  imageCodes = IMAGE_CODES;
  selectedCard: CardTypes = 'MONSTER';
  index: number = 0;
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCard = 'MONSTER';
      const allMonsters = loadMonsters();
      const monsterName: string = this.route.snapshot.paramMap.get('monsterName');
      if (monsterName === 'builder') {
        this.monster = new MonsterComplete();
        this.monster.hp = this.getRandomNumber(20) + 1;
        this.monster.complexity = this.getRandomNumber(3) + 1;
        this.monster.role = ROLES[this.getRandomNumber(ROLES.length)];
        this.monster.elements = [ELEMENTS[this.getRandomNumber(ELEMENTS.length)]];
        this.monster.actions.push(new Action(), new Action(), new Action(), new Action());
        this.monster.actions.forEach(a => a.element = ELEMENTS[this.getRandomNumber(ELEMENTS.length)]);
        this.monster.buffs.push(new Buff(), new Buff(), new Buff(), new Buff());
      } else {
        this.monster = allMonsters.find(m => m.monsterName === monsterName);
      }
      this.originalMonster = Object.assign({}, this.monster);
    });
  }

  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  save() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    const json = JSON.stringify(this.getCleanMonster(), null, 2);
    selBox.value = json;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  // a little janky but for now it's fine
  getCleanMonster(): MonsterComplete {
    const copy = JSON.parse(JSON.stringify(this.monster));
    const guiProps = ['isSelected', 'isHighlighted', 'isHovered', 'referenceFlg'];
    const actionProps = ['monsterName'];
    const buffProps = ['monsterName'];
    guiProps.forEach(prop => {
      delete copy[prop];
      copy.actions.forEach(a => delete a[prop]);
      copy.buffs.forEach(b => delete b[prop]);
    });
    actionProps.forEach(prop => copy.actions.forEach(a => delete a[prop]));
    buffProps.forEach(prop => copy.buffs.forEach(b => delete b[prop]));
    return copy;
  }

  selectCard(selection: CardTypes, index: number) {
    this.selectedCard = selection;
    this.index = index;
  }

  getPromiseText() {
    return getAbilityText(this.monster.promiseDescription, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }
}
