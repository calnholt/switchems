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
  private SAVE_CACHE: string = 'SAVE_CACHE';
  private KEY: string = 'SAVED_MONSTERS';

  constructor() { }

  loadMonsters() {
    this.monsters = loadMonsters();
    this.loadMonsterLocalStorage();
    // this.monsters.sort((a,b) => a.monsterName.localeCompare(b.monsterName));
    this.monsters.sort((a,b) => a.initiative >= b.initiative ? 1 : -1);
  }

  getMonsters() {
    if (!this.monsters) {
      this.loadMonsters();
    }
    return this.monsters;
  }

  getMonster(monsterName: string, useJson?: boolean): MonsterComplete {
    if (!this.monsters || useJson) {
      this.loadMonsters();
      loadMonsters().find(m => m.monsterName === monsterName);
    }
    return this.monsters.find(m => m.monsterName === monsterName);
  }

  saveMonster(monster: MonsterComplete) {
    this.saveMonsterLocalStorage(monster);
    const index = this.monsters.findIndex(m => monster.monsterName === m.monsterName);
    // update if exists
    if (index > -1) {
      this.monsters.splice(index, 1, monster);
    } else {
      this.monsters.push(monster);
    }
    this.monsters.sort((a,b) => a.monsterName.localeCompare(b.monsterName));
    alert('Saved!');
  }

  saveMonsterLocalStorage(monster: MonsterComplete) {
    const cache = localStorage.getItem(this.SAVE_CACHE);
    // first save
    if (!cache) {
      localStorage.setItem(this.KEY, JSON.stringify({ token: [monster], name: this.SAVE_CACHE }));
    } else {
      const savedMonsters = this.getMonstersLocalStorage();
      const index = savedMonsters.findIndex(m => monster.monsterName === m.monsterName);
      if (index > -1) {
        savedMonsters.splice(index, 1, monster);
      } else {
        savedMonsters.push(monster);
        localStorage.setItem(this.KEY, JSON.stringify({ token: savedMonsters, name: this.SAVE_CACHE }));
      }
    }
  }

  getMonstersLocalStorage(): Array<MonsterComplete> {
    return JSON.parse(localStorage.getItem(this.KEY)).token;
  }

  loadMonsterLocalStorage() {
    const cache = localStorage.getItem(this.KEY);
    if (!cache) {
      return;
    }
    const json = JSON.parse(localStorage.getItem(this.KEY));
    this.monsters = this.monsters.concat(json.token);
  }

  deleteMonsterLocalStorage(monster: MonsterComplete) {
    const json = JSON.parse(localStorage.getItem(this.KEY));
    json.token.splice(json.token.findIndex(m => m.monsterName === monster.monsterName), 1);
    localStorage.setItem(this.KEY, JSON.stringify({ token: json.token, name: this.SAVE_CACHE }));
    this.loadMonsters();
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

  getAverageMonsterSpeed(): number {
    let total: number = 0;
    this.getMonsters().forEach(monster => {
      monster.actions.forEach(action => {
        total += action.speed;
      });
    });
    return total / (this.getMonsters().length * 4);
  }

  getCardsLastUpdatedByDate(date: Date): Array< Monster | Action | Buff > {
    let out = new Array<Monster | Action | Buff>();
    const offset = -300; // Timezone offset for EST in minutes.
    const today = new Date(new Date().getTime() + offset * 60 * 1000);
    let monsters = this.getMonsters();
    monsters.forEach(monster => {
      if (new Date(monster.lastUpdated) > date) {
        out.push(monster);
      }
      monster.actions.forEach(action => {
        if (new Date(action.lastUpdated) > date) {
          out.push(action);
        }
      });
      monster.buffs.forEach(buff => {
        if (new Date(buff.lastUpdated) > date) {
          out.push(buff);
        }
      });
    });
    return out;
  }
}
