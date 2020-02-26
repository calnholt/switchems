import { Role, ElemType, TermCode } from './../../../types/dataTypes';

export class GUI {
    isSelected?: boolean;
}

export class Card extends GUI {
    monsterId?: number;
    monsterName?: string;
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

export class Buff extends Card {
    timing: number;
    buffText: string;
    critFlg: boolean;
}

export class Action extends Card {
    abilityName: string;
    abilityText?: string;
    attack?: number;
    speed?: number;
    element?: ElemType;
    buff?: number;
    discard?: number;
    draw?: number;
    modifiers?: number[];
    auraDuration?: number;
    statusFlg?: boolean;
    reactionFlg?: boolean;
}
