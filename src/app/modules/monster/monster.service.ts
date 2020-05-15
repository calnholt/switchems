import { Action, Buff } from 'src/app/modules/monster/model/monster';
import { ElemType, ImageCode } from 'src/app/types/dataTypes';
import { Monster } from './model/monster';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor() { }

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
