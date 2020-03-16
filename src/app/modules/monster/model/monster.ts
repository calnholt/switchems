import { Role, ElemType, TermCode, BuffTiming } from './../../../types/dataTypes';

export class GUI {
    isSelected?: boolean;
    isHighlighted?: boolean;
    isHovered?: boolean;
}

export class Card extends GUI {
    monsterId?: number;
    monsterName?: string;
    description?: string;
    comments?: string;
    playtestNotes?: string;
}

export class Monster extends Card {
    elements: Array<ElemType> = new Array<ElemType>();
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
    timing: BuffTiming = null;
    buffText: string = null;
    critFlg: boolean = null;
}

export class Action extends Card {
    abilityName: string = null;
    abilityText?: string = null;
    attack?: number = null;
    speed?: number = null;
    element?: ElemType = null;
    buff?: number = null;
    discard?: number = null;
    draw?: number = null;
    modifiers?: number[] = [0, 0, 0, 0, 0, 0];
    auraDuration?: number = null;
    statusFlg?: boolean = null;
    reactionFlg?: boolean = null;
}
