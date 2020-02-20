import { Role, ElemType } from './../../../types/dataTypes';
import { Buff } from 'src/app/modules/buff/model/buff';
import { Action } from 'src/app/modules/action/model/action';
export class Card {
    monsterId: number;
    monsterName: string;
    description?: string;
    comments?: string;
    playtestNotes?: string;
}

export class Monster extends Card {
    elements: ElemType[];
    abilityName: string;
    abilityText?: string;
    hp: number;
    role: Role;
}

export class MonsterComplete extends Monster {
    actions: Action[];
    buffs: Buff[];
}
