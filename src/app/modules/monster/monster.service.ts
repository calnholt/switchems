import { Action, Buff, MonsterComplete } from 'src/app/modules/monster/model/monster';
import { ElemType, ImageCode } from 'src/app/types/dataTypes';
import { Monster } from './model/monster';
import { Injectable } from '@angular/core';
import { loadMonsters } from '../import/json-to-obj';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private monsters: Array<MonsterComplete>;

  constructor() { }

  loadMonsters() {
    this.monsters = loadMonsters().sort((a,b) => a.monsterName.localeCompare(b.monsterName));
  }

  getMonsters() {
    if (!this.monsters) {
      this.loadMonsters();
    }
    return this.monsters;
  }

  getMonster(monsterName: string): MonsterComplete {
    if (!this.monsters) {
      this.loadMonsters();
    }
    return this.monsters.find(m => m.monsterName === monsterName);
  }

  saveMonster(monster: MonsterComplete) {
    const index = this.monsters.findIndex(m => monster.monsterName === m.monsterName);
    // update if exists
    if (index > -1) {
      this.monsters.splice(index, 1, monster);
      alert('Monster successfully updated. (Will disappear on refresh)');
    } else {
      this.monsters.push(monster);
      alert('Monster successfully saved. (Will disappear on refresh)');
    }
    this.monsters.sort((a,b) => a.monsterName.localeCompare(b.monsterName));
  }

  hasElement(monster: Monster, elemType: ElemType): boolean {
    return monster.elements.includes(elemType);
  }

  getCardIcons(action: Action): Array<String> {
    const out = Array<String>();
    for (let i = 0; i < action.buff; i++) {
      out.push('buff');
    }
    for (let i = 0; i < action.discard; i++) {
      out.push('discard');
    }
    for (let i = 0; i < action.draw; i++) {
      out.push('draw');
    }
    return out;
  }

  getTimingRomanNumeral(buff: Buff): string {
    if (buff.timing === 'Pre-Actions') {return 'I'; }
    if (buff.timing === 'With Attack') {return 'II'; }
    if (buff.timing === 'Post Actions') {return 'III'; }
    if (buff.timing === 'None') {return 'X'; }
  }
}
