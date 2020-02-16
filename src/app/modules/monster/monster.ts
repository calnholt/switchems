import { Buff } from './../buff/buff';
import { Action } from './../action/action';
export class MonsterHeader {
    monsterId: number;
    monsterName: string;
}

export class Monster extends MonsterHeader {
    elementLks: string[];
    abilityName: string;
    abilityText?: string;
    hp: number;
    roleLk: string;
}

export class MonsterComplete extends Monster {
    actions: Action[];
    buffs: Buff[];
}
