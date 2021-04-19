import { TERM_CODES, IMAGE_CODES, CardTypes, ELEMENTS, Css } from './../../../types/dataTypes';
import { MonsterComplete, Action, Buff } from './../model/monster';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAbilityText } from './../../common/cards';
import { MonsterService } from '../monster.service';
import { AccordianSegment } from 'card-builder-framework';

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
  termCodeSegments = Array<AccordianSegment>();
  imageCodeSegments = Array<AccordianSegment>();
  imageCodes = IMAGE_CODES;
  termCodes = TERM_CODES;
  selectedCard: CardTypes = 'MONSTER';
  index: number = 0;
  TERM_CSS: Css = 'term';
  ABILITY_IMG_CSS: Css = 'term-img';

  constructor(
    private route: ActivatedRoute,
    public monsterSerivce: MonsterService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCard = 'MONSTER';
      const monsterName: string = this.route.snapshot.paramMap.get('monsterName');
      if (monsterName === 'builder') {
        this.createRandomMonster();
      } else {
        this.monster = this.monsterSerivce.getMonster(monsterName);
      }
      this.originalMonster = Object.assign({}, this.monster);
      this.termCodeSegments = TERM_CODES.map(tc => ({value: tc.key, description: tc.value}));
      this.imageCodeSegments = AccordianSegment.getImageAccordianSegments(IMAGE_CODES);
    });
  }

  createRandomMonster() {
    this.monster = new MonsterComplete();
    this.monster.hp = this.getRandomNumber(20) + 1;
    this.monster.complexity = this.getRandomNumber(3) + 1;
    this.monster.savedFlg = true;
    this.monster.elements = [ELEMENTS[this.getRandomNumber(ELEMENTS.length)]];
    this.monster.actions.push(new Action(), new Action(), new Action(), new Action());
    this.monster.actions.forEach(a => a.element = ELEMENTS[this.getRandomNumber(ELEMENTS.length)]);
    this.monster.buffs.push(new Buff(), new Buff(), new Buff(), new Buff());
  }

  getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  copy() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    let monster = this.getCleanMonster(this.monster);
    monster = this.setLastUpdated(monster);
    const json = JSON.stringify(monster, null, 2);
    selBox.value = json;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  save() {
    this.monsterSerivce.saveMonster(this.monster);
  }

  delete() {
    this.monsterSerivce.deleteMonsterLocalStorage(this.monster);
  }

  // a little janky but for now it's fine
  getCleanMonster(monster: MonsterComplete): MonsterComplete {
    const copy = JSON.parse(JSON.stringify(monster));
    const guiProps = [
        'isSelected',
        'isHighlighted',
        'isHovered',
        'isExtraBoardHovered',
        'referenceFlg',
        'savedFlg',
    ];
    const actionProps = ['monsterName', 'number'];
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

  setLastUpdated(monsterToCopy: MonsterComplete): MonsterComplete {
    const savedMonsterComplete = this.getCleanMonster(this.monsterSerivce.getMonster(monsterToCopy.monsterName, true));
    const offset = -300; // Timezone offset for EST in minutes.
    const estDate = new Date(new Date().getTime() + offset * 60 * 1000);
    const today = estDate.toUTCString();
    // make comparable copies
    // saved copies
    const savedMonster = Object.assign({}, savedMonsterComplete);
    const savedMonsterActions = Object.assign([], savedMonsterComplete.actions);
    delete savedMonster.actions;
    const savedMonsterBuffs = Object.assign([], savedMonsterComplete.buffs);
    delete savedMonster.buffs;
    // current copies
    const currentMonster = Object.assign({}, monsterToCopy);
    const currentMonsterActions = Object.assign([], currentMonster.actions);
    delete currentMonster.actions;
    const currentMonsterBuffs = Object.assign([], currentMonster.buffs);
    delete currentMonster.buffs;
    // compare each, and if differences, set lastUpdated property
    // monster
    if (!this.compareStringifiedJSON(currentMonster, savedMonster) || !savedMonsterComplete.lastUpdated) {
      monsterToCopy.lastUpdated = today;
    }
    // actions
    currentMonsterActions.forEach((currentAction, i) => {
      const savedAction = savedMonsterActions[i];
      if (!this.compareStringifiedJSON(currentAction, savedAction) || !savedAction.lastUpdated) {
        monsterToCopy.actions[i].lastUpdated = today;
      }
    });
    // buffs
    currentMonsterBuffs.forEach((currentBuff, i) => {
      const savedBuff = savedMonsterBuffs[i];
      if (!this.compareStringifiedJSON(currentBuff, savedBuff) || !savedBuff.lastUpdated) {
        monsterToCopy.buffs[i].lastUpdated = today;
      }
    });
    return monsterToCopy;
  }

  deletePropertyFromAllCards(property: string, monster: MonsterComplete): MonsterComplete {
    delete monster[property];
    monster.actions.forEach(a => delete a[property]);
    monster.buffs.forEach(b => delete b[property]);
    return monster;
  }

  compareStringifiedJSON(a: any, b: any): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  selectCard(selection: CardTypes, index: number) {
    this.selectedCard = selection;
    this.index = index;
  }

  getPromiseText() {
    return getAbilityText(this.monster.promiseDescription, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

  getTermText(term: string): string {
    return getAbilityText(term, this.TERM_CSS, this.ABILITY_IMG_CSS);
  }

  discord() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/831677858493366324/v-OidtpcJe8bnhjqbRbGAIuQetl-17Y0yRL2gSh3dDRfM6u_tmE8WK5xho-9xXykKYQ0");

    request.setRequestHeader('Content-type', 'application/json');
    let now = new Date();
    var myEmbed = {
      title: `Switchems! Weekly Card Changelog ${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}`,
      description: this.getWeeklyUpdatedText(),
      color: this.hexToDecimal("#ff0000")
    }

    var params = {
      username: "Mr. Update Alert 3000",
      embeds: [myEmbed]
    }

    request.send(JSON.stringify(params));
  }

  getWeeklyUpdatedText(): string {
    let out = "";
    var date = new Date();
    date.setDate(date.getDate()-7);
    let cards = this.monsterSerivce.getCardsLastUpdatedByDate(date);
    let lastMonsterName = '';
    cards.forEach(card => {
      if (lastMonsterName != card.monsterName) {
        lastMonsterName = card.monsterName;
        out += `**${this.getLinkToMonster(card.monsterName)}**:\n`;
      }
      if (card instanceof MonsterComplete) {
        out += `+ ${card.monsterName} - [Monster]`;
      }
      if (card instanceof Action) {
        out += `+ ${card.abilityName} - [Action]`;
      }
      if (card instanceof Buff) {
        out += `+ ${card.buffName} - [Buff]`;
      }
      out += '\n';
    });
    return out;
  }

  hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
  }

  getLinkToMonster(monsterName: string): string {
    let link = 'http://calnholt.github.io/switchems/monster/' + monsterName;
    return `[${monsterName}](${link})`;
  }



}
